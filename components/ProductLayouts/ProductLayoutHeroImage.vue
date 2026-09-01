<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
</script>

<template>
  <div>
    <section class="py-20">
      <div class="container-kunista">
        <!-- Large hero image -->
        <div class="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-kunista-black to-kunista-black/50">
          <div class="relative aspect-video">
            <img
              :src="activeImage || product.mainImage"
              :alt="product.name"
              class="h-full w-full object-cover opacity-75"
            >
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-kunista-black/80 to-transparent p-8">
              <div>
                <h2 class="mb-2 text-3xl font-bold text-white">{{ product.name }}</h2>
                <p class="text-zinc-300">{{ product.category }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Minimal text, feature focus -->
        <div class="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 class="mb-6 text-2xl font-bold text-kunista-black">Huvudegenskaper</h3>
            <ul class="space-y-4">
              <li
                v-for="(benefit, idx) in product.benefits.slice(0, 5)"
                :key="idx"
                class="flex items-start gap-4"
              >
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kunista-red text-sm font-bold text-white">
                  {{ idx + 1 }}
                </span>
                <span class="text-zinc-700">{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="spec in product.specifications"
              :key="spec.label"
              class="rounded-xl bg-kunista-gray p-6 text-center"
            >
              <p class="text-xs font-semibold uppercase text-zinc-600">{{ spec.label }}</p>
              <p class="mt-3 text-xl font-bold text-kunista-black">{{ spec.value }}</p>
            </div>
          </div>
        </div>

        <BaseButton to="/kontakt" variant="primary" class="mt-12">
          Begär offert
        </BaseButton>

        <!-- Image thumbnails -->
        <div class="mt-12 flex gap-2 overflow-x-auto pb-4">
          <button
            v-for="image in product.gallery"
            :key="image"
            class="flex-shrink-0 overflow-hidden rounded-lg border-2 border-transparent transition hover:border-kunista-red"
            :class="{ 'border-kunista-red': activeImage === image }"
            @click="activeImage = image"
          >
            <img
              :src="image"
              :alt="`${product.name}`"
              class="h-20 w-20 object-cover"
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
