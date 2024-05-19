# Personal website of Joost Visser

My main goals are to have a place to showcase my work, and to have a place to experiment
with new technologies and ideas.
- Website is hosted on a cluster using K8s
- Uses a headless CMS to blog

## Getting started

Install bun

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```

Install dependencies

```bash
bun install
```


## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
