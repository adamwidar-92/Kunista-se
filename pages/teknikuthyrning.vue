<script setup lang="ts">
/**
 * Sida för maskinuthyrning inom lantbruk.
 */
useSeoMeta({
  title: 'Maskinuthyrning lantbruk – Kunista',
  description:
    'Hyra lantbruksmaskiner för säsongstoppar och särskilda projekt. Kunista erbjuder flexibel maskinuthyrning för lantbruk över hela Sverige.'
})

const rentalBenefits = [
  {
    title: 'Flexibilitet',
    description: 'Hyr maskinen så länge du behöver – från några dagar upp till en hel säsong.'
  },
  {
    title: 'Inga stora investeringar',
    description: 'Slipp binda kapital och testa maskiner innan du bestämmer dig för ett köp.'
  },
  {
    title: 'Service ingår',
    description: 'Våra uthyrningsmaskiner är genomgångna och klara för arbete.'
  }
]

const rentalMachines = [
  'Omrörare',
  'Gödselspridare',
  'Betesputsare',
  'Jordfräs',
  'Lastarskopa',
  'Tippvagn'
]
</script>

<template>
  <div>
    <section class="bg-kunista-black py-24 text-white">
      <div class="container-kunista">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red">Teknikuthyrning</p>
        <h1 class="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
          Maskinuthyrning för lantbruk
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-zinc-300">
          Hyra lantbruksmaskiner är ett smart sätt att hantera säsongstoppar och särskilda projekt
          utan att binda kapital. Vi erbjuder flexibel maskinuthyrning anpassad efter dina behov.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container-kunista">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              title="Varför hyra lantbruksmaskiner?"
              description="Ibland behövs inte en egen maskin året runt. Då är uthyrning ett kostnadseffektivt alternativ."
            />
            <div class="space-y-6">
              <div
                v-for="benefit in rentalBenefits"
                :key="benefit.title"
                class="flex gap-4"
              >
                <div class="mt-1 h-2 w-2 shrink-0 rounded-full bg-kunista-red" />
                <div>
                  <h3 class="mb-1 text-lg font-bold text-kunista-black">{{ benefit.title }}</h3>
                  <p class="text-zinc-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-2xl bg-zinc-100">
            <img
              src="https://placehold.co/800x600/1A1A1A/FFFFFF?text=Maskinuthyrning"
              alt="Maskinuthyrning för lantbruk"
              class="rounded-2xl object-cover"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="bg-kunista-gray py-20">
      <div class="container-kunista">
        <SectionTitle
          overline="Sortiment"
          title="Maskiner du kan hyra"
          description="Nedan ser du exempel på maskiner som finns tillgängliga för uthyrning. Kontakta oss för aktuellt sortiment och priser."
          align="center"
        />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="machine in rentalMachines"
            :key="machine"
            class="rounded-xl bg-white p-6 text-center shadow-sm"
          >
            <h3 class="text-lg font-bold text-kunista-black">{{ machine }}</h3>
          </div>
        </div>
        <div class="mt-12 text-center">
          <BaseButton to="/kontakt" variant="primary">
            Få hyrespris
          </BaseButton>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
