# Personal blog

This is the source code for my personal website. It's based on the excelent blog by [Guillermo Rauch](https://rauchg.com/) and design to be easy to work on and write for.

## Tech Stack

The blog is built using the Nuxt ecosystem, chosen for its simplicity and flexibility. Nuxt’s ecosystem is designed to ensure easy integration among tools, which reduces configuration overhead and accelerates development. Here’s a breakdown of the main plugins used in this project:

### Nuxt Content

Nuxt Content is a headless CMS that allows for easy management of content files, like blog posts and static pages, directly in Markdown. It discovers Markdown files in the content directory and automatically renders them with customizable styles. This plugin enables easy content creation without needing a traditional database or CMS interface, which simplifies both the tech stack and maintenance efforts. You can find more details [here](https://content.nuxt.com/).

A custom image component has been implemented that allows visitors to click on the image and enlarge it. It can be used in markdown files like so:

```markdown
::enlarge-img{src="/images/projects/personal-blog/cover-image.png" alt="Example Image"}
Click the image to enlarge it.
::
```

### Nuxt SEO

Nuxt SEO centralizes and simplifies search engine optimization tasks, allowing easy configuration of essential SEO elements. It streamlines the addition of meta tags, OG (Open Graph) images, sitemaps, and `robots.txt` files across the entire site. By automating these SEO aspects, Nuxt SEO enhances discoverability on search engines with minimal setup. More information is available [here](https://nuxtseo.com/).

### Nuxt Tailwind

Nuxt Tailwind is a straightforward integration of the Tailwind CSS framework into Nuxt projects, enabling the use of Tailwind's utility-first CSS classes for rapid, responsive styling. Tailwind is used for all styling. More on Nuxt Tailwind can be found [here](https://tailwindcss.nuxtjs.org/).

### Nuxt Image

Nuxt Image optimizes images across the site by automatically generating responsive, properly sized images based on the device and screen size. This improves performance, particularly on mobile, by reducing load times and optimizing bandwidth usage. Nuxt Image ensures that images are optimized without manual intervention, contributing to a smooth user experience. Learn more about Nuxt Image [here](https://image.nuxt.com/).

## Development and deployment

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
