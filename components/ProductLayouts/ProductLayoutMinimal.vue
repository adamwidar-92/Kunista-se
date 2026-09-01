<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
</script>

<template>
  <div>
    <section class="py-24">
      <div class="container-kunista max-w-4xl">
        <!-- Centered, spacious layout -->
        <div class="mb-20 text-center">
          <h2 class="mb-6 text-5xl font-extrabold text-kunista-black">
            {{ product.name }}
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-600">
            {{ product.fullDescription }}
          </p>
        </div>

        <!-- Large centered image -->
        <div class="mb-20 overflow-hidden rounded-3xl bg-zinc-100">
          <img
            :src="activeImage || product.mainImage"
            :alt="product.name"
            class="aspect-[3/2] w-full object-cover"
          >
        </div>

        <!-- Spacious benefits -->
        <div class="mb-20">
          <h3 class="mb-12 text-center text-3xl font-bold text-kunista-black">
            Fördelar
          </h3>
          <div class="space-y-6">
            <div
              v-for="(benefit, idx) in product.benefits"
              :key="idx"
              class="border-b border-zinc-200 py-6 last:border-b-0"
            >
              <p class="text-lg text-zinc-700">
                <span class="font-bold text-kunista-red">→</span> {{ benefit }}
              </p>
            </div>
          </div>
        </div>

        <!-- Specs centered -->
        <div class="mb-20">
          <h3 class="mb-12 text-center text-3xl font-bold text-kunista-black">
            Teknisk data
          </h3>
          <div class="grid gap-8 sm:grid-cols-2">
            <div
              v-for="spec in product.specifications"
              :key="spec.label"
              class="text-center"
            >
              <p class="text-sm font-semibold uppercase text-zinc-500">{{ spec.label }}</p>
              <p class="mt-3 text-2xl font-bold text-kunista-black">{{ spec.value }}</p>
            </div>
          </div>
        </div>

        <div class="mb-20 text-center">
          <BaseButton to="/kontakt" variant="primary" size="lg">
            Begär offert
          </BaseButton>
        </div>

        <!-- Small gallery at bottom -->
        <div class="flex justify-center gap-3">
          <button
            v-for="image in product.gallery"
            :key="image"
            class="overflow-hidden rounded-lg border-2 border-transparent transition hover:border-kunista-red"
            :class="{ 'border-kunista-red': activeImage === image }"
            @click="activeImage = image"
          >
            <img
              :src="image"
              :alt="`${product.name}`"
              class="h-16 w-16 object-cover"
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
