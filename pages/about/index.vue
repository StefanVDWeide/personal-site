<template>
  <div v-if="data" class="w-full lg:w-1/2 justify-self-center min-h-screen">
    <ContentRenderer :value="data" class="prose lg:prose-xl prose-invert" />
  </div>
</template>
<script setup lang="ts">
// Fetch about page data
const { data } = await useAsyncData("about", () => queryCollection("about").first());

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// Define the OgImage for this page
defineOgImage("GeneralPage", {
  title: "About"
});

useSeoMeta({
  title: "about",
  ogTitle: "about",
  description: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
  ogDescription: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
})
</script>
