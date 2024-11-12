<template>
  <div v-if="post" class="w-11/12 lg:w-1/2 justify-self-center min-h-screen">
    <div class="mb-12">
      <h1 class="text-4xl font-extrabold">{{ post.title }}</h1>
      <span class="text-gray-500 text-sm">Stefan van der Weide | {{ new
        Date(post.date).toISOString().substring(0, 10)
        }}</span>
    </div>
    <ContentRenderer :value="post"
      class="prose lg:prose-xl prose-invert prose-inline-code:font-normal prose-inline-code:p-1 prose-inline-code:border-[1px] prose-inline-code:border-solid prose-inline-code:rounded prose-inline-code:bg-black prose-inline-code:text-gray-400" />
  </div>
</template>

<script setup lang="ts">
// Setup composables
const route = useRoute();
const slug = route.params.slug as string;

// Fetch blog post data
const { data: post } = await useAsyncData(`${slug}`, () => queryContent("blog", slug).findOne());

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// Create binding for the OgImage generation
useContentHead(post.value)

useSeoMeta({
  title: post.value?.title,
  ogTitle: post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
})
</script>
