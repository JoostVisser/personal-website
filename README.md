# Personal website of Joost Visser

My main goals are to have a place to showcase my work, and to have a place to experiment
with new technologies and ideas.
- Website is hosted on a cluster using K8s
- Uses a headless CMS to manage content

## Getting started

The website has been built using `bun`, but `npm` should work fine as well.

Install bun

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```

Install dependencies

```bash
bun install
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
