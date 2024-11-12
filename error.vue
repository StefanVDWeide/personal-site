<template>
  <div class="bg-dark-background h-screen text-white content-center justify-items-center">
    <div>
      <div class="flex items-center space-x-2">
        <h2>{{ error.statusCode }} | </h2>
        <h3>{{ error.message }}</h3>
      </div>
      <div class="mt-4">
        <button @click="handleError">Back Home</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>
