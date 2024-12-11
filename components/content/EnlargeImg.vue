<template>
  <div class="relative cursor-pointer" @click="toggleEnlarge">
    <NuxtImg v-bind="$attrs" :class="{
      'w-full': !enlarge,
      'w-3/5 flex self-center fixed inset-0 top-0 left-0 right-0 bottom-0 m-auto z-50 object-contain': enlarge
    }" />
    <div v-if="enlarge" class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40" @click="toggleEnlarge">
    </div>
    <div v-if="!enlarge">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const enlarge = ref(false);

const toggleEnlarge = () => {
  enlarge.value = !enlarge.value;
};
</script>

<style scoped>
/* Optional: Smooth transition for image enlargement */
img {
  transition: transform 0.3s ease;
}
</style>
