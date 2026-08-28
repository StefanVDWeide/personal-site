import { defineCollection, defineContentConfig } from "@nuxt/content";
import { defineOgImageSchema } from "nuxt-og-image/content";
import { defineSitemapSchema } from "@nuxtjs/sitemap/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        date: z.string(),
        category: z.string(),
        ogImage: defineOgImageSchema(),
        sitemap: defineSitemapSchema({ name: "blog" }),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        date: z.string(),
        category: z.string(),
        coverImage: z.string().optional(),
        ogImage: defineOgImageSchema(),
        sitemap: defineSitemapSchema({ name: "projects" }),
      }),
    }),
    about: defineCollection({
      type: "page",
      source: "about/*.md",
    }),
  },
});
