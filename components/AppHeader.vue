<template>
  <header class="flex w-full mb-8 md:mb-12 items-center justify-self-center">
    <NuxtLink to="/" class="text-md md:text-lg whitespace-nowrap font-bold">
      <span class="pr-2">Stefan van der Weide</span>
    </NuxtLink>
    <nav class="font-mono text-xs grow justify-end items-center flex gap-2 md:gap-3">
      <NuxtLink to="/projects" class="inline-flex">Projects</NuxtLink>
      <NuxtLink to="/about" class="inline-flex">About</NuxtLink>
    </nav>
  </header>
</template>
