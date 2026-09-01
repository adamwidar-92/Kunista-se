<script setup lang="ts">
/**
 * Produktsida / katalog för nya Metal-Fach-lantbruksmaskiner.
 */
import { products, getCategories } from '~/data/products'

useSeoMeta({
  title: 'Ny lantbruksmaskin – Metal-Fach hos Kunista',
  description:
    'Köp ny lantbruksmaskin från Metal-Fach hos Kunista. Se vårt utbud av omrörare, spridare, betesputsare och andra jordbruksmaskiner.'
})

const categories = getCategories()
const search = ref('')
const selectedCategory = ref('Alla')

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.value.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory =
      selectedCategory.value === 'Alla' || product.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <div>
    <section class="bg-kunista-black py-24 text-white">
      <div class="container-kunista">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red">Ny teknik</p>
        <h1 class="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
          Ny lantbruksmaskin från Metal-Fach
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-zinc-300">
          Upptäck vårt sortiment av nya jordbruksmaskiner. Här hittar du omrörare,
          gödselspridare, betesputsare och mycket mer för det moderna lantbruket.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container-kunista">
        <ProductFilter
          v-model:search="search"
          v-model:category="selectedCategory"
          :categories="categories"
          class="mb-10"
        />

        <div
          v-if="filteredProducts.length > 0"
          class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div v-else class="rounded-xl bg-zinc-50 py-16 text-center">
          <p class="text-lg text-zinc-600">
            Inga produkter matchade din sökning. Prova att ändra filter eller sökord.
          </p>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
