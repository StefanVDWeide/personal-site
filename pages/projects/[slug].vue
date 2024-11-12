<template>
  <div v-if="project" class="w-11/12 lg:w-1/2 justify-self-center min-h-screen">
    <div class="mb-12">
      <NuxtImg class="w-full mb-12" :src="`/images/projects/${slug}/cover-image.png`" />
      <h1 class="text-4xl font-extrabold">{{ project.title }}</h1>
      <span class="text-gray-500 text-sm">Stefan van der Weide | {{ new
        Date(project.date).toISOString().substring(0, 10)
        }}</span>
    </div>
    <ContentRenderer :value="project"
      class="prose lg:prose-xl prose-invert prose-inline-code:font-normal prose-inline-code:p-1 prose-inline-code:rounded prose-inline-code:bg-black prose-inline-code:text-gray-400" />
  </div>
</template>

<script setup lang="ts">
// Setup composables
const route = useRoute();
const slug = route.params.slug as string;

// Fetch blog post data
const { data: project } = await useAsyncData(`${slug}`, () => queryContent("projects", slug).findOne());

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// Create binding for the OgImage generation
useContentHead(project.value)

useSeoMeta({
  title: project.value?.title,
  ogTitle: project.value?.title,
  description: project.value?.description,
  ogDescription: project.value?.description,
})
</script>
