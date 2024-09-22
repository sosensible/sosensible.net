<script lang="ts" setup>
const route = useRoute()

const links = [{
  label: 'About',
  avatar: {
    src: 'https://github.com/sosensible'
  },
  badge: 100
}, {
  label: 'Coach',
  icon: 'i-heroicons-home',
  to: '/coach'
  // }, {
  //   label: 'Horizontal Navigation',
  //   icon: 'i-heroicons-chart-bar',
  //   to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
}, {
  label: 'Coaching Board',
  icon: 'i-heroicons-command-line',
  to: '/coach/board'
}]
</script>

<template>
  <div>
    <UHeader :links="links">
      <template #logo>
        SOSensible.net
        <UBadge label="prototype" variant="subtle" class="mb-0.5" />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton to="https://github.com/nuxt-ui-pro/starter" target="_blank" icon="i-simple-icons-github"
          aria-label="GitHub" color="gray" variant="ghost" />
      </template>
    </UHeader>
    <!-- <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" /> -->

    <slot />

    <UFooter>
      <template #left>
        Copyright © {{ new Date().getFullYear() }}
      </template>
    </UFooter>
  </div>
</template>

<style></style>