<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
</script>

<template>
  <div>
    <section class="bg-kunista-black py-20 text-white">
      <div class="container-kunista">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Image -->
          <div class="overflow-hidden rounded-2xl bg-zinc-800">
            <img
              :src="activeImage || product.mainImage"
              :alt="product.name"
              class="aspect-square w-full object-cover"
            >
          </div>

          <!-- Content -->
          <div>
            <div class="mb-4 text-sm font-semibold uppercase tracking-wider text-kunista-red">
              {{ product.category }}
            </div>
            <h2 class="mb-6 text-4xl font-extrabold text-white">
              {{ product.name }}
            </h2>
            <p class="mb-10 text-lg leading-relaxed text-zinc-300">
              {{ product.fullDescription }}
            </p>

            <!-- Accent colored benefits -->
            <div class="mb-12">
              <h3 class="mb-6 text-xl font-bold text-kunista-red">Fördelar</h3>
              <ul class="space-y-3">
                <li
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="flex items-start gap-3 text-zinc-300"
                >
                  <span class="mt-1 text-kunista-red">✦</span>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <!-- Specs with accent -->
            <div class="mb-12 rounded-lg border-l-4 border-kunista-red bg-zinc-900/50 p-6">
              <h3 class="mb-6 text-xl font-bold text-white">Specifikationer</h3>
              <dl class="space-y-4">
                <div v-for="spec in product.specifications" :key="spec.label">
                  <dt class="text-sm font-semibold text-kunista-red">{{ spec.label }}</dt>
                  <dd class="text-white">{{ spec.value }}</dd>
                </div>
              </dl>
            </div>

            <BaseButton to="/kontakt" variant="primary">
              Begär offert
            </BaseButton>
          </div>
        </div>

        <!-- Gallery -->
        <div class="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-6">
          <button
            v-for="image in product.gallery"
            :key="image"
            class="aspect-square overflow-hidden rounded-lg border-2 border-transparent bg-zinc-800 transition hover:border-kunista-red"
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
    </section>
  </div>
</template>
