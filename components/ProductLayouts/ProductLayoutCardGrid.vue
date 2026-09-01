<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
</script>

<template>
  <div>
    <section class="py-16">
      <div class="container-kunista">
        <div class="mb-12">
          <h2 class="mb-6 text-3xl font-bold text-kunista-black">
            {{ product.name }}
          </h2>
          <p class="max-w-2xl text-lg text-zinc-600">
            {{ product.fullDescription }}
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Image -->
          <div class="overflow-hidden rounded-2xl bg-zinc-100">
            <img
              :src="activeImage || product.mainImage"
              :alt="product.name"
              class="aspect-square w-full object-cover"
            >
          </div>

          <!-- Cards grid for features and specs -->
          <div class="space-y-6">
            <!-- Benefits as cards -->
            <div>
              <h3 class="mb-4 text-xl font-bold text-kunista-black">Fördelar</h3>
              <div class="grid gap-3">
                <div
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="rounded-lg border-l-4 border-kunista-red bg-zinc-50 p-4"
                >
                  <p class="text-sm font-medium text-kunista-black">{{ benefit }}</p>
                </div>
              </div>
            </div>

            <!-- Specs as cards -->
            <div>
              <h3 class="mb-4 text-xl font-bold text-kunista-black">Specifikationer</h3>
              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="spec in product.specifications"
                  :key="spec.label"
                  class="rounded-lg bg-kunista-black p-4 text-white"
                >
                  <p class="text-xs font-semibold uppercase text-zinc-300">{{ spec.label }}</p>
                  <p class="mt-2 text-lg font-bold">{{ spec.value }}</p>
                </div>
              </div>
            </div>

            <BaseButton to="/kontakt" variant="primary" class="w-full">
              Begär offert
            </BaseButton>
          </div>
        </div>

        <!-- Image gallery -->
        <div class="mt-12">
          <div class="grid grid-cols-3 gap-4 sm:grid-cols-6">
            <button
              v-for="image in product.gallery"
              :key="image"
              class="aspect-square overflow-hidden rounded-lg border-2 border-transparent bg-zinc-100 transition hover:border-kunista-red"
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
      </div>
    </section>
  </div>
</template>
