# See all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# install dependencies into temp directory, for layer caching
FROM base as install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile


FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/build .

# Run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "build/index.js" ]
