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
        <!-- Image gallery showcase -->
        <div class="mb-12">
          <div class="grid gap-4 lg:grid-cols-12">
            <div class="lg:col-span-8 overflow-hidden rounded-2xl bg-zinc-100">
              <img
                :src="activeImage || product.mainImage"
                :alt="product.name"
                class="aspect-[4/3] w-full object-cover"
              >
            </div>
            <div class="lg:col-span-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              <button
                v-for="image in product.gallery"
                :key="image"
                class="aspect-square overflow-hidden rounded-xl border-2 border-transparent bg-zinc-100 transition hover:border-kunista-red"
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

        <!-- Content below images -->
        <div class="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 class="mb-4 text-3xl font-bold text-kunista-black">
              {{ product.name }}
            </h2>
            <p class="mb-8 text-zinc-600">
              {{ product.fullDescription }}
            </p>

            <h3 class="mb-4 text-xl font-bold text-kunista-black">Fördelar</h3>
            <ul class="space-y-2">
              <li
                v-for="benefit in product.benefits"
                :key="benefit"
                class="flex items-start gap-2 text-sm text-zinc-700"
              >
                <span class="mt-1 text-kunista-red">→</span>
                {{ benefit }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-6 text-xl font-bold text-kunista-black">Teknisk data</h3>
            <div class="space-y-4">
              <div
                v-for="spec in product.specifications"
                :key="spec.label"
                class="rounded-lg border border-zinc-200 p-4"
              >
                <p class="text-xs font-semibold uppercase text-zinc-600">{{ spec.label }}</p>
                <p class="mt-2 text-lg font-bold text-kunista-black">{{ spec.value }}</p>
              </div>
            </div>

            <BaseButton to="/kontakt" variant="primary" class="mt-6 w-full">
              Begär offert
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
