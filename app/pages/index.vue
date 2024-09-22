<script setup lang="ts">
</script>

<template>
  <div>

    <ULandingHero title="SOSensible.net - Prototype"
      description="While somethings change faster than we can keep up, there are still unchangeable things.">
      <template #links>
        <UButton to="https://ui.nuxt.com/pro/guide" target="_blank" size="lg" icon="i-heroicons-book-open">
          Guide
        </UButton>

        <UButton to="https://ui.nuxt.com/pro/components" target="_blank" size="lg" color="gray"
          icon="i-heroicons-cube-transparent">
          Components
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection id="features" title="The freedom to build anything">
      <template #description>
        We started with a framework years ago called CO-OP, later renamed Collaborate.<br>
        The tools have changed, as have I. Yet, the heart of the framework remains with the new name, WE.
      </template>

      <UPageGrid>
        <UPageCard icon="i-heroicons-wrench-screwdriver" title="Built with Nuxt Tools"
          description="And along came Vue... that inspired Nuxt, that builds tools to be used beyond the Nuxt/Vue community." />
        <UPageCard icon="i-heroicons-square-3-stack-3d" title="Collaborate with ease"
          description="While AI may be the buzz, it isn't the goal." />
        <UPageCard icon="i-heroicons-device-phone-mobile" title="HWYIYFT"
          description="Learn from the past. Live in the present. Prepare for the future." />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA title="Ready to get started?"
        description="Nuxt UI Pro is free in development, but you need a license to use it in production.">
        <template #links>
          <UButton to="https://ui.nuxt.com/pro/purchase" target="_blank" size="lg" color="black"
            icon="i-heroicons-credit-card">
            Buy now
          </UButton>
          <UButton to="https://ui.nuxt.com/pro/guide#license" target="_blank" size="lg" color="gray"
            trailing-icon="i-heroicons-arrow-right-20-solid">
            License
          </UButton>
        </template>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
