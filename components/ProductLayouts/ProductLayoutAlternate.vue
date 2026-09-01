<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const activeImage = ref(props.product.mainImage)
const activeTab = ref('overview')
</script>

<template>
  <div>
    <section class="py-16">
      <div class="container-kunista">
        <h2 class="mb-8 text-3xl font-bold text-kunista-black">
          {{ product.name }}
        </h2>

        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Image -->
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
                class="overflow-hidden rounded-lg border-2 border-transparent bg-zinc-100 transition hover:border-kunista-red"
                :class="{ 'border-kunista-red': activeImage === image }"
                @click="activeImage = image"
              >
                <img
                  :src="image"
                  :alt="`${product.name}`"
                  class="aspect-square w-full object-cover"
                >
              </button>
            </div>
          </div>

          <!-- Tabbed content -->
          <div>
            <!-- Tabs -->
            <div class="mb-6 flex gap-2 border-b border-zinc-200">
              <button
                @click="activeTab = 'overview'"
                class="px-4 py-3 text-sm font-medium transition"
                :class="activeTab === 'overview' ? 'border-b-2 border-kunista-red text-kunista-black' : 'text-zinc-600 hover:text-kunista-black'"
              >
                Översikt
              </button>
              <button
                @click="activeTab = 'benefits'"
                class="px-4 py-3 text-sm font-medium transition"
                :class="activeTab === 'benefits' ? 'border-b-2 border-kunista-red text-kunista-black' : 'text-zinc-600 hover:text-kunista-black'"
              >
                Fördelar
              </button>
              <button
                @click="activeTab = 'specs'"
                class="px-4 py-3 text-sm font-medium transition"
                :class="activeTab === 'specs' ? 'border-b-2 border-kunista-red text-kunista-black' : 'text-zinc-600 hover:text-kunista-black'"
              >
                Specifikationer
              </button>
            </div>

            <!-- Tab content -->
            <div class="min-h-72">
              <!-- Overview tab -->
              <div v-if="activeTab === 'overview'" class="space-y-4">
                <p class="text-lg text-zinc-600">
                  {{ product.fullDescription }}
                </p>
                <p class="text-sm text-zinc-500">
                  {{ product.category }}
                </p>
              </div>

              <!-- Benefits tab -->
              <div v-if="activeTab === 'benefits'" class="space-y-3">
                <h3 class="font-bold text-kunista-black">Huvudfördelar</h3>
                <ul class="space-y-2">
                  <li
                    v-for="benefit in product.benefits"
                    :key="benefit"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-1 text-kunista-red">✓</span>
                    <span class="text-zinc-700">{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Specs tab -->
              <div v-if="activeTab === 'specs'" class="space-y-3">
                <h3 class="font-bold text-kunista-black">Teknisk data</h3>
                <dl class="space-y-3">
                  <div
                    v-for="spec in product.specifications"
                    :key="spec.label"
                    class="border-b border-zinc-100 pb-3 last:border-b-0"
                  >
                    <dt class="text-sm font-semibold text-zinc-600">{{ spec.label }}</dt>
                    <dd class="mt-1 text-zinc-900">{{ spec.value }}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <BaseButton to="/kontakt" variant="primary" class="mt-8 w-full">
              Begär offert
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
