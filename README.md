# Personal website of Joost Visser

My main goals are to have a place to showcase my work, and to have a place to experiment
with new technologies and ideas.
- [ ] Website is hosted on a cluster using K8s
- [ ] Uses a headless CMS to blog

## Getting started

Install pnpm

```bash
npm install -g pnpm
```

Install dependencies

```bash
pnpm install
```

Install playwright if you want to run integration tests (Fedora not supported):

```bash
pnpm exec playwright install
```


## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of the app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
