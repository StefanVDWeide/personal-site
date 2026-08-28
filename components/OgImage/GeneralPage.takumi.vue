<template>
  <div class="h-full w-full flex items-start justify-start bg-dark-background text-white">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col w-full h-full justify-center px-20">
        <h3 class="text-2xl font-light">Stefan van der Weide</h3>
        <h1 class="text-8xl font-black">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: "title",
})
</script>
