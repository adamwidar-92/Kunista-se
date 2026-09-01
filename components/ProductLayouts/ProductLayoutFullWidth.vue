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
        <!-- Full width hero image -->
        <div class="mb-12 overflow-hidden rounded-2xl bg-zinc-100">
          <img
            :src="activeImage || product.mainImage"
            :alt="product.name"
            class="aspect-video w-full object-cover"
          >
        </div>

        <!-- Image gallery -->
        <div class="mb-12 grid grid-cols-4 gap-4 sm:grid-cols-6">
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

        <!-- Content stacked -->
        <div class="max-w-3xl">
          <h2 class="mb-4 text-3xl font-bold text-kunista-black">
            {{ product.name }}
          </h2>
          <p class="mb-8 text-lg text-zinc-600">
            {{ product.fullDescription }}
          </p>

          <div class="grid gap-8 md:grid-cols-2">
            <div>
              <h3 class="mb-4 text-xl font-bold text-kunista-black">Fördelar</h3>
              <ul class="space-y-2">
                <li
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="flex items-start gap-2 text-sm text-zinc-700"
                >
                  <span class="mt-0.5 text-kunista-red">→</span>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-4 text-xl font-bold text-kunista-black">Teknisk data</h3>
              <dl class="space-y-2">
                <div v-for="spec in product.specifications.slice(0, 4)" :key="spec.label" class="text-sm">
                  <dt class="font-semibold text-kunista-black">{{ spec.label }}</dt>
                  <dd class="text-zinc-600">{{ spec.value }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <BaseButton to="/kontakt" variant="primary" class="mt-8">
            Begär offert
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
