<template>
  <div class="min-h-screen">
    <main class="w-11/12 lg:w-3/4 font-mono m-auto my-10 text-sm">
      <header class="text-gray-600 flex items-center text-xs">
        <button class="w-24 h-9 text-left  ">date</button>
        <span class="grow pl-2">title</span>
        <button class="h-9 pl-4">category</button>
      </header>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="post._path">
            <span
              class="flex transition-[background-color] hover:bg-[#242424] active:bg-[#222] border-y border-[#313131] border-b-0">
              <span class="py-3 flex grow items-center ">
                <span class="w-28 inline-block self-start shrink-0 text-gray-500">{{ new
                  Date(post.date).toISOString().substring(0, 10)
                  }}</span>
                <span class="grow text-gray-100">{{ post.title }}</span>
                <span class="text-gray-500 text-xs">{{ post.category }}</span>
              </span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>
<script lang="ts" setup>
// Define the OgImage for this page
defineOgImageComponent("GeneralPage", {
  title: "Home"
});

// Define the SEO metadata
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
  ogDescription: "The personal blog of Stefan van der Weide. A software engineer and fullstack enthousiast",
})

// Fetch blog post data
const { data: posts } = await useAsyncData("posts", () => queryContent("blog").find());

</script>
