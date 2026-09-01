<script setup lang="ts">
/**
 * Återanvändbar sektionsrubrik med överrubrik, huvudrubrik och ingress.
 */
defineProps<{
  overline?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    class="mb-12"
    :class="align === 'center' ? 'text-center' : 'text-left'"
  >
    <p
      v-if="overline"
      class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red"
    >
      {{ overline }}
    </p>
    <h2 class="text-3xl font-extrabold text-kunista-black sm:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 max-w-2xl text-lg text-zinc-600"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </div>
</template>
