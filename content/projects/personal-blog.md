---
title: 'Building a personal blog'
description: 'I wanted a site to publish my blog posts and project write-ups, so I built one'
path: /projects/personal-blog
date: 2024-10-27
category: project
coverImage: cover-image.png
ogImage:
  component: BlogPost
  props:
    readingMins: 5
sitemap:
  loc: /projects/personal-blog
---

This post gives an overview of what I used to build my personal blog, the site you are on now! The design is based on the excellent blog by [Guillermo Rauch](https://rauchg.com/) and designed to be easy to customise on and write articles for.

TLDR: If you just want the code, you can find it [here on github](https://github.com/StefanVDWeide/personal-site)

## Tech Stack

The blog is built using tools from the Nuxt ecosystem, chosen for its simplicity and flexibility. It's also the frontend framework that I have the most experience with. Nuxt’s ecosystem is designed to ensure easy integration among tools, which reduces configuration overhead and accelerates development. Here’s a breakdown of the main tools and libs used in this project:

### Nuxt Content

[Nuxt Content](https://content.nuxt.com/) is a headless CMS that allows for easy management of content files, like blog posts and static pages, directly in Markdown. It discovers Markdown files in the content directory and automatically renders them with customizable styles. This plugin enables easy content creation without needing a traditional database or CMS interface, which simplifies both the tech stack and maintenance efforts.

In my case I simply create a new branch and write the blog post in markdown. When merging into master a deploy hook is triggered that generates and deploys the new pages automatically.

### Nuxt SEO

[Nuxt SEO](https://nuxtseo.com/) centralizes and simplifies search engine optimization tasks, allowing easy configuration of essential SEO elements. It streamlines the addition of meta tags, OG (Open Graph) images, sitemaps, and \`robots.txt\` files across the entire site. By automating these SEO aspects, Nuxt SEO enhances discoverability on search engines with minimal setup.

Further down I'll discuss this in further detail!

### Nuxt Tailwind

[Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) is a straightforward integration of the Tailwind CSS framework into Nuxt projects, enabling the use of Tailwind's utility-first CSS classes for rapid, responsive styling. Tailwind is used for all styling. I'll go through some of my configuration later when discussing the setup of the site.

### Nuxt Image

[Nuxt Image](https://image.nuxt.com/) optimizes images across the site by automatically generating responsive, properly sized images based on the device and screen size. This improves performance, particularly on mobile, by reducing load times and optimizing bandwidth usage. Nuxt Image ensures that images are optimized without manual intervention, contributing to a smooth user experience.

## The Setup

Let's get into some of the more intersting tech details of this blog!

### Folder Structure

Here's the folder structure of the project:

``` bash
├── README.md
├── app.vue
├── components
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   └── OgImage
│       ├── BlogPost.vue
│       └── GeneralPage.vue
├── content
│   ├── about
│   │   └── about-me.md
│   ├── blog
│   │   └── useful-macos-command-line-tools.md
│   └── projects
│       └── personal-blog.md
├── error.vue
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── pages
│   ├── about
│   │   └── index.vue
│   ├── blog
│   │   └── [slug].vue
│   ├── index.vue
│   └── projects
│       ├── [slug].vue
│       └── index.vue
├── public
│   ├── _robots.txt
│   ├── favicon.ico
│   └── images
│       ├── blog
│       └── projects
│           └── personal-blog
│               └── cover-image.png
├── server
│   └── tsconfig.json
├── tailwind.config.js
└── tsconfig.json
```

- **components**: Contains Vue components used throughout the site, including header, footer, and Open Graph image components.
- **content**: Holds all the Markdown files for pages like about, blog posts, and projects.
- **pages**: Vue files that correspond to routes on the site
- **public**: Static files like the \`robots.txt\`, favicon, and images including the ones used for blog posts and project write-ups.

This structure allows Nuxt, together with Nuxt Content, to automatically generate routes and render content, simplifying navigation and content management.

### Tailwind Config

Tailwind CSS is used for all styling in the blog. The \`tailwind.config.js\` file is where custom configurations are set:

```js [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        "dark-background": "#1C1C1C",
      },
      fontFamily: {
        custom: ['Work Sans'],
        code: ['Fira Code']
      },
      typography: {
        DEFAULT: {
          css: {
            'pre code': { 'font-family': 'Fira Code' },
            code: {
              'font-family': 'Fira Code',
            },
            "code::before": {
              content: '""',
              paddingLeft: "0.25rem",
            },
            "code::after": {
              content: '""',
              paddingRight: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    }),
  ],
};

```

In the blog, all styling is handled with Tailwind CSS, and the `tailwind.config.js` file is central for setting custom configurations.
Here's a breakdown of the configuration:

1. **Theme Customization**: The `extend` property allows for customized settings to customize the default theme.
   - **Colors**: The `dark-background` color is specified to set a custom color that then can easily be used throughout the different pages.
   - **Font Families**: Custom fonts are defined with `Work Sans` for standard text and `Fira Code` for code snippets, which improves readability and looks nice.

2. **Typography**: The configuration includes customized styling for code blocks and inline code to create a smooth reading experience.
   - **Code Blocks and Inline Code**: Custom settings define `Fira Code` as the font for all code, aligning with the blog’s design. The code tags are also padded slightly using `code::before` and `code::after` to improve spacing and readability.

3. **Plugins**: Tailwind's typography plugin is included to handle rich text styling. Additionally, a custom `prose-inline-code` variant is created. This applies specific styling to inline code within prose text, which excludes certain areas (like preformatted code blocks) to prevent conflicts.

This configuration ensures an optimized and consistent style across the blog. Unused CSS is purged during build, helping with loading efficiency.

### Code Highlighting

For a blog that includes code snippets, syntax highlighting enhances readability. Nuxt Content supports code highlighting out of the box. By specifying the language in the Markdown code blocks, the code is automatically highlighted:

<pre>
```javascript
console.log('Hello, World!');
```
</pre>

You can also easily change the theme:

```typescript
export default defineNuxtConfig({
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})
```

### SEO

Optimizing the blog for search engines was simplified with Nuxt SEO. By configuring meta tags, sitemaps, and \`robots.txt\`, I ensured that the site is discoverable. It also allows easy per page metadata editing, both static and dynamically. For example, the homepage metadata is set like:

```typescript
// Define the SEO metadata
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
  ogDescription: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
})
```

This setup automates the inclusion of essential SEO elements across all pages.

### ogImage

Nuxt SEO also includes support of ogImages. Open Graph images enrich link previews on social platforms. I created dynamic OG images using Vue components in \`components/OgImage\`:

``` bash
├── components
    └── OgImage
        ├── BlogPost.vue
        └── GeneralPage.vue
```

These components generate images based on the content of each page or post. By integrating them with Nuxt's server-side rendering, the images are generated automatically when the site is built.

```typescript
// Define the OgImage for this page
defineOgImageComponent("GeneralPage", {
  title: "About"
});
```

## Deployment Using \`nuxt generate\` as a Static Site

To host the blog efficiently, I opted to deploy it as a static site using \`nuxt generate\`. This command pre-renders all the pages, resulting in a set of static files that can be served from any static hosting service:

```bash
npm run generate
```

The generated files are placed in the \`dist\` directory, ready for deployment. I run an instance of Dokploy on Hetzner to easily deploy static sites such as this one.

---

Utilizing the tools availble in the Nuxt ecosystem has resulted in a blog that is not only easy to maintain but also performant and SEO-friendly. I encourage anyone intersted in Nuxt to take a look at the code, which can be found [here](https://github.com/StefanVDWeide/personal-site), and anyone who also wants a nice and easy site to fork this and make it their own!
