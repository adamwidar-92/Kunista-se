<script setup lang="ts">
/**
 * Om oss-sida som presenterar Kunista och verksamheten.
 */
useSeoMeta({
  title: 'Om Kunista – Lantbruksmaskiner & Jordbruksmaskiner i Sverige',
  description:
    'Lär känna Kunista. Vi är din svenska partner för försäljning av nya och begagnade lantbruksmaskiner, maskinuthyrning och personlig service.'
})
</script>

<template>
  <div>
    <section class="bg-kunista-black py-24 text-white">
      <div class="container-kunista">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red">Om oss</p>
        <h1 class="max-w-2xl text-4xl font-extrabold text-white sm:text-5xl">
          Kunista – ett svenskt företag med fokus på lantbruket
        </h1>
      </div>
    </section>

    <section class="py-20">
      <div class="container-kunista grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            title="Vi förstår svenskt lantbruk"
            description="Kunista grundades utifrån en ambition att göra det enklare för svenska lantbrukare att köpa, sälja och hyra lantbruksmaskiner. Genom nära samarbete med ledande tillverkare som Metal-Fach erbjuder vi modern teknik som håller måttet i vårt nordiska klimat."
          />
          <div class="mt-8 space-y-6 text-zinc-600">
            <p>
              Vårt sortiment omfattar både nya jordbruksmaskiner och begagnade lantbruksmaskiner.
              För oss är det viktigt att varje kund får rätt maskin för sina behov – oavsett om det
              handlar om en omrörare, betesputsare, gödselspridare eller lastarskopa.
            </p>
            <p>
              Vi värdesätter långsiktiga relationer, ärlig rådgivning och en smidig affärsprocess.
              När du vänder dig till Kunista möter du ett team som kan lantbruk och bryr sig om ditt resultat.
            </p>
          </div>
        </div>
        <div class="rounded-2xl bg-zinc-100">
          <img
            src="https://placehold.co/800x600/C8102E/FFFFFF?text=Kunista+lantbruk"
            alt="Kunista och svenskt lantbruk"
            class="rounded-2xl object-cover"
          >
        </div>
      </div>
    </section>

    <TrustSection />
    <CtaSection />
  </div>
</template>
