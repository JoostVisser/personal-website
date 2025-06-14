FROM node:20-bookworm-slim as base
WORKDIR /usr/src/app
RUN npm install -g pnpm@9.1.3

# install dependencies into temp directory, for layer caching
FROM base as install
RUN mkdir -p /temp/dev
COPY package.json pnpm-lock.yaml /temp/dev/
RUN cd /temp/dev && pnpm install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json pnpm-lock.yaml /temp/prod/
RUN cd /temp/prod && pnpm install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Tests & build
ENV NODE_ENV=production
RUN pnpm run build

# Copy production dependencies and source code into final image
FROM base AS release
ENV PORT=3000
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/build build
COPY package.json build/

# Run the app
USER node
ENTRYPOINT [ "node", "build/index.js" ]
