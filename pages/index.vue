<script setup lang="ts">
/**
 * Kunista startsida med hero, introduktion, kategorier, utvalda produkter,
 * förtroendebyggande sektion, CTA och footer.
 */
import { getFeaturedProducts } from '~/data/products'

useSeoMeta({
  title: 'Kunista – Lantbruksmaskiner & Jordbruksmaskiner i Sverige',
  description:
    'Kunista säljer nya och begagnade lantbruksmaskiner samt erbjuder maskinuthyrning i Sverige. Upptäck Metal-Fach, köp jordbruksmaskiner eller sälj din maskin.',
  ogTitle: 'Kunista – Lantbruksmaskiner & Jordbruksmaskiner i Sverige',
  ogDescription:
    'Kunista säljer nya och begagnade lantbruksmaskiner samt erbjuder maskinuthyrning i Sverige.',
  ogType: 'website'
})

const featuredProducts = getFeaturedProducts()
</script>

<template>
  <div>
    <HeroSection />

    <!-- Introduktion -->
    <section class="py-20">
      <div class="container-kunista max-w-3xl text-center">
        <SectionTitle
          overline="Om Kunista"
          title="Din partner för lantbruksmaskiner i Sverige"
          description="Kunista är ett svenskt företag specialiserat på försäljning och förmedling av lantbruksmaskiner och jordbruksmaskiner. Oavsett om du ska köpa ny Metal-Fach-teknik, sälja en begagnad maskin eller hyra utrustning, finns vi med dig genom hela processen."
          align="center"
        />
      </div>
    </section>

    <CategoryCards />

    <!-- Utvalda produkter -->
    <section class="py-20">
      <div class="container-kunista">
        <SectionTitle
          overline="Ny teknik"
          title="Utvalda Metal-Fach-produkter"
          description="Här ser du ett urval av våra nya lantbruksmaskiner från Metal-Fach."
          align="center"
        />
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="mt-12 text-center">
          <BaseButton to="/ny-teknik" variant="secondary">
            Se hela katalogen
          </BaseButton>
        </div>
      </div>
    </section>

    <TrustSection />
    <CtaSection />
  </div>
</template>
