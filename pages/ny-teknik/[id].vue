<script setup lang="ts">
/**
 * Individuell produktsida för en specifik Metal-Fach-maskin.
 */
import { products, getProductById } from '~/data/products'
import ProductLayoutClassic from '~/components/ProductLayouts/ProductLayoutClassic.vue'
import ProductLayoutFullWidth from '~/components/ProductLayouts/ProductLayoutFullWidth.vue'
import ProductLayoutCardGrid from '~/components/ProductLayouts/ProductLayoutCardGrid.vue'
import ProductLayoutHeroImage from '~/components/ProductLayouts/ProductLayoutHeroImage.vue'
import ProductLayoutMinimal from '~/components/ProductLayouts/ProductLayoutMinimal.vue'
import ProductLayoutDark from '~/components/ProductLayouts/ProductLayoutDark.vue'
import ProductLayoutTiled from '~/components/ProductLayouts/ProductLayoutTiled.vue'
import ProductLayoutCompact from '~/components/ProductLayouts/ProductLayoutCompact.vue'
import ProductLayoutRightImage from '~/components/ProductLayouts/ProductLayoutRightImage.vue'
import ProductLayoutAlternate from '~/components/ProductLayouts/ProductLayoutAlternate.vue'

const route = useRoute()
const product = getProductById(route.params.id as string)

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Produkten hittades inte' })
}

useSeoMeta({
  title: `${product.name} – Ny lantbruksmaskin från Kunista`,
  description: product.shortDescription,
  ogImage: product.mainImage
})

// Get the layout component based on product layoutType
const layoutComponent = computed(() => {
  const layoutMap: Record<string, any> = {
    classic: ProductLayoutClassic,
    fullwidth: ProductLayoutFullWidth,
    cardgrid: ProductLayoutCardGrid,
    heroimage: ProductLayoutHeroImage,
    minimal: ProductLayoutMinimal,
    dark: ProductLayoutDark,
    tiled: ProductLayoutTiled,
    compact: ProductLayoutCompact,
    rightimage: ProductLayoutRightImage,
    alternate: ProductLayoutAlternate
  }
  return layoutMap[product.layoutType || 'classic'] || ProductLayoutClassic
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-kunista-black py-16 text-white">
      <div class="container-kunista">
        <NuxtLink
          to="/ny-teknik"
          class="mb-4 inline-flex items-center text-sm text-zinc-400 hover:text-white"
        >
          &larr; Tillbaka till katalogen
        </NuxtLink>
        <h1 class="text-3xl font-extrabold text-white sm:text-4xl">
          {{ product.name }}
        </h1>
        <p class="mt-2 text-lg text-zinc-300">
          {{ product.category }}
        </p>
      </div>
    </section>

    <!-- Dynamic layout component -->
    <component :is="layoutComponent" :product="product" />

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>
