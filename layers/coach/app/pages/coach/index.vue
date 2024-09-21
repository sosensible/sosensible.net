<script setup lang="ts">
// const { data: coach } = useFetch('/api/coach');
</script>

<template>
  <div>
    <h1>Coach</h1>
    <h2>Budgeting You Want</h2>
    <ULandingHero title="Turn Your Vision into Reality"
      description="Watch your dreams materialize before your eyes with us." />
    <hr>

    <UBlogPost title="Nuxt 3.9"
      description="Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive server components, new composables..."
      date="Dec 25, 2023" orientation="horizontal" :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
      :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
      :badge="{ label: 'Release' }" />

  </div>
</template>