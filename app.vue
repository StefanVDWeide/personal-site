<template>
  <div class="bg-dark-background min-h-screen text-white font-custom">
    <div class="container mx-auto pt-6">
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Stefan's Personal Site` : "Stefan's Personal Site";
  }
})
</script>
