<template>
  <div class="min-h-screen">
    <div class="w-11/12 lg:w-3/4 grid grid-cols-1 md:grid-cols-3 justify-self-center m-auto my-10">
      <div v-for="project in projects" class="w-full">
        <NuxtLink :to="project._path">
          <NuxtImg class="w-full" :src="`/images/${project.path}/cover-image.png`" />
          <h2 class="text-2xl font-bold mt-4">{{ project.title }}</h2>
          <h3 class="text-lg font-light">{{ project.description }}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// Define the OgImage for this page
defineOgImageComponent("GeneralPage", {
  title: "Projects"
});

// Define the SEO metadata
useSeoMeta({
  title: "Projects",
  ogTitle: "Projects",
  description: "All the technical and non-technical projects that I like to work on, including upcoming ones",
  ogDescription: "All the technical and non-technical projects that I like to work on, including upcoming ones",
})

const { data: projects } = await useAsyncData("projects", () => queryContent("projects").find());

</script>
