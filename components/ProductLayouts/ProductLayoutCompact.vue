<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
</script>

<template>
  <div>
    <section class="py-12">
      <div class="container-kunista">
        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Image - compact -->
          <div class="lg:col-span-1">
            <div class="mb-3 overflow-hidden rounded-lg bg-zinc-100">
              <img
                :src="activeImage || product.mainImage"
                :alt="product.name"
                class="aspect-square w-full object-cover"
              >
            </div>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="image in product.gallery"
                :key="image"
                class="aspect-square overflow-hidden rounded border-2 border-transparent bg-zinc-100 transition hover:border-kunista-red"
                :class="{ 'border-kunista-red': activeImage === image }"
                @click="activeImage = image"
              >
                <img
                  :src="image"
                  :alt="`${product.name}`"
                  class="h-full w-full object-cover"
                >
              </button>
            </div>
          </div>

          <!-- Compact content -->
          <div class="lg:col-span-2 flex flex-col">
            <h2 class="mb-2 text-2xl font-bold text-kunista-black">
              {{ product.name }}
            </h2>
            <p class="mb-4 text-sm text-zinc-600">
              {{ product.shortDescription }}
            </p>

            <div class="mb-4 space-y-1">
              <li
                v-for="benefit in product.benefits.slice(0, 4)"
                :key="benefit"
                class="text-xs text-zinc-700"
              >
                ✓ {{ benefit }}
              </li>
            </div>

            <div class="mb-4 grid grid-cols-2 gap-3 text-xs">
              <div
                v-for="spec in product.specifications"
                :key="spec.label"
                class="rounded bg-zinc-50 p-2"
              >
                <p class="font-semibold text-zinc-600">{{ spec.label }}</p>
                <p class="font-bold text-kunista-black">{{ spec.value }}</p>
              </div>
            </div>

            <BaseButton to="/kontakt" variant="primary" class="w-full">
              Begär offert
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
