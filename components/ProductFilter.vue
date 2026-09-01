<script setup lang="ts">
/**
 * Filterkomponent för produktkatalogen med sökning och kategorifilter.
 */
defineProps<{
  categories: string[]
}>()

const search = defineModel<string>('search', { default: '' })
const selectedCategory = defineModel<string>('category', { default: 'Alla' })
</script>

<template>
  <div class="rounded-xl bg-white p-6 shadow-sm md:flex md:items-end md:justify-between md:gap-6">
    <div class="mb-4 flex-1 md:mb-0">
      <label for="product-search" class="mb-2 block text-sm font-medium text-kunista-black">
        Sök produkt
      </label>
      <input
        id="product-search"
        v-model="search"
        type="text"
        placeholder="T.ex. omrörare, spridare, fräs..."
        class="w-full rounded border border-zinc-300 px-4 py-2.5 text-kunista-black placeholder-zinc-400 focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
      >
    </div>
    <div class="w-full md:w-64">
      <label for="category-filter" class="mb-2 block text-sm font-medium text-kunista-black">
        Kategori
      </label>
      <select
        id="category-filter"
        v-model="selectedCategory"
        class="w-full rounded border border-zinc-300 bg-white px-4 py-2.5 text-kunista-black focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
      >
        <option>Alla</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>
