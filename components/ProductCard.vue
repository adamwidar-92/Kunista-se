<script setup lang="ts">
import type { Product } from '~/types/product'

/**
 * Produktkort som används i listningar och utvalda sektioner.
 */
defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
    <div class="relative aspect-[4/3] overflow-hidden bg-zinc-100">
      <img
        :src="product.mainImage"
        :alt="product.name"
        class="h-full w-full object-cover transition duration-500 hover:scale-105"
        loading="lazy"
      >
      <span
        class="absolute left-4 top-4 rounded bg-kunista-red px-3 py-1 text-xs font-semibold text-white"
      >
        {{ product.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="mb-2 text-xl font-bold text-kunista-black">
        {{ product.name }}
      </h3>
      <p class="mb-6 flex-1 text-zinc-600">
        {{ product.shortDescription }}
      </p>
      <BaseButton :to="`/ny-teknik/${product.id}`" variant="primary" class="w-full">
        Läs mer
      </BaseButton>
    </div>
  </article>
</template>
