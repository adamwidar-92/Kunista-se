<script setup lang="ts">
/**
 * Förtroendebyggande sektion med säljargument om erfarenhet, service och Sverige-fokus.
 */
const sellingPoints = [
  {
    title: 'Svensk expertis',
    description: 'Vi förstår förutsättningarna för svenskt lantbruk och hjälper dig hitta rätt jordbruksmaskiner.'
  },
  {
    title: 'Kvalitetsprodukter',
    description: 'Vi samarbetar med Metal-Fach för att erbjuda hållbara och effektiva lantbruksmaskiner.'
  },
  {
    title: 'Personlig service',
    description: 'Få rådgivning, service och support från ett team som bryr sig om ditt resultat.'
  },
  {
    title: 'Flexibla lösningar',
    description: 'Köp nytt, sälj begagnat eller hyr maskin – vi anpassar oss efter dina behov.'
  }
]
</script>

<template>
  <section class="bg-kunista-gray py-20">
    <div class="container-kunista">
      <SectionTitle
        overline="Varför Kunista?"
        title="Erfarenhet, service och Sverige i fokus"
        description="Vi kombinerar lokal kännedom om svenskt lantbruk med ett brett utbud av lantbruksmaskiner och lösningar."
        align="center"
      />
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="point in sellingPoints"
          :key="point.title"
          class="rounded-xl bg-white p-8 shadow-sm"
        >
          <div class="mb-4 h-2 w-12 rounded bg-kunista-red" />
          <h3 class="mb-3 text-lg font-bold text-kunista-black">
            {{ point.title }}
          </h3>
          <p class="text-zinc-600">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
