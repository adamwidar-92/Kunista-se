<script setup lang="ts">
/**
 * Sektion med länkkort till de viktigaste kategorierna på sajten.
 */
const categories = [
  {
    title: 'Ny teknik',
    description: 'Köp nya lantbruksmaskiner från Metal-Fach med hög kvalitet och modern teknik.',
    to: '/ny-teknik',
    icon: '🚜'
  },
  {
    title: 'Begagnad teknik',
    description: 'Se våra begagnade lantbruksmaskiner på Blocket eller sälj din egen maskin till oss.',
    to: '/begagnad-teknik',
    icon: '🔧'
  },
  {
    title: 'Teknikuthyrning',
    description: 'Flexibel maskinuthyrning för lantbruk – hyr rätt maskin vid rätt tillfälle.',
    to: '/teknikuthyrning',
    icon: '⏱️'
  }
]
</script>

<template>
  <section class="bg-kunista-gray py-20">
    <div class="container-kunista">
      <SectionTitle
        overline="Våra områden"
        title="Välj rätt lösning för ditt lantbruk"
        description="Oavsett om du ska köpa ny lantbruksmaskin, sälja begagnad teknik eller hyra maskin finns vi här för dig."
        align="center"
      />
      <div class="grid gap-8 md:grid-cols-3">
        <NuxtLink
          v-for="category in categories"
          :key="category.to"
          :to="category.to"
          class="group flex flex-col rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <span class="mb-4 text-4xl" aria-hidden="true">{{ category.icon }}</span>
          <h3 class="mb-3 text-xl font-bold text-kunista-black group-hover:text-kunista-red">
            {{ category.title }}
          </h3>
          <p class="mb-6 flex-1 text-zinc-600">
            {{ category.description }}
          </p>
          <span class="font-semibold text-kunista-red">
            Läs mer &rarr;
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
