<template>
  <div class="relative cursor-pointer" @click="toggleEnlarge">
    <div v-if="enlarge" class="fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <!-- Background Layer with Semi-Transparent Black and Transition -->
      <div class="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>

      <!-- Centered Image with Transition -->
      <NuxtImg v-bind="$attrs" class="relative w-1/2 py-4 object-contain transition-transform duration-300 scale-100" />
    </div>

    <div v-else>
      <!-- Default Image with Transition -->
      <NuxtImg v-bind="$attrs" class="w-full transition-transform duration-300" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const enlarge = ref(false);

const toggleEnlarge = () => {
  enlarge.value = !enlarge.value;
};
</script>
