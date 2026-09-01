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
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Content on left -->
          <div>
            <h2 class="mb-4 text-2xl font-bold text-kunista-black">
              {{ product.name }}
            </h2>
            <p class="mb-8 text-lg leading-relaxed text-zinc-600">
              {{ product.fullDescription }}
            </p>

            <div class="mb-10">
              <h3 class="mb-4 text-xl font-bold text-kunista-black">Fördelar</h3>
              <ul class="space-y-3">
                <li
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="flex items-start gap-3"
                >
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kunista-red text-xs text-white">✓</span>
                  <span class="text-zinc-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-4">
              <BaseButton to="/kontakt" variant="primary">
                Begär offert
              </BaseButton>
            </div>
          </div>

          <!-- Images on right -->
          <div>
            <div class="mb-4 overflow-hidden rounded-2xl bg-zinc-100">
              <img
                :src="activeImage || product.mainImage"
                :alt="product.name"
                class="aspect-[4/3] w-full object-cover"
              >
            </div>
            <div class="grid grid-cols-3 gap-4">
              <button
                v-for="image in product.gallery"
                :key="image"
                class="overflow-hidden rounded-lg border-2 border-transparent bg-zinc-100 focus:border-kunista-red"
                :class="{ 'border-kunista-red': activeImage === image }"
                @click="activeImage = image"
              >
                <img
                  :src="image"
                  :alt="`${product.name} – bild`"
                  class="aspect-square w-full object-cover"
                >
              </button>
            </div>
          </div>
        </div>

        <!-- Specs table below -->
        <div class="mt-16">
          <h3 class="mb-8 text-2xl font-bold text-kunista-black">Teknisk data</h3>
          <div class="overflow-hidden rounded-xl bg-white shadow-sm">
            <table class="min-w-full divide-y divide-zinc-200">
              <tbody class="divide-y divide-zinc-200">
                <tr
                  v-for="spec in product.specifications"
                  :key="spec.label"
                >
                  <th class="w-1/2 bg-zinc-50 px-6 py-4 text-left text-sm font-semibold text-kunista-black">
                    {{ spec.label }}
                  </th>
                  <td class="px-6 py-4 text-sm text-zinc-700">
                    {{ spec.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
