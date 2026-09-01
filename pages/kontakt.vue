<script setup lang="ts">
/**
 * Kontaktsida med kontaktuppgifter, formulär och adress.
 */
useSeoMeta({
  title: 'Kontakt – Kunista | Sälj din lantbruksmaskin',
  description:
    'Kontakta Kunista för köp, försäljning eller uthyrning av lantbruksmaskiner. Sälj din maskin, begär offert eller ställ en fråga till vårt team.'
})

const route = useRoute()
const subject = ref('')

onMounted(() => {
  if (route.query.ärende === 'sälja') {
    subject.value = 'Jag vill sälja en maskin'
  } else if (route.query.ärende === 'uthyrning') {
    subject.value = 'Förfrågan om maskinuthyrning'
  } else if (route.query.ärende === 'offert') {
    subject.value = 'Offertförfrågan på ny maskin'
  } else {
    subject.value = 'Allmän förfrågan'
  }
})
</script>

<template>
  <div>
    <section class="bg-kunista-black py-24 text-white">
      <div class="container-kunista text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red">Kontakt</p>
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
          Hör av dig till Kunista
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          Oavsett om du vill köpa en ny lantbruksmaskin, sälja din maskin eller hyra utrustning,
          finns vi här för att hjälpa dig.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container-kunista">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Kontaktinfo -->
          <div>
            <h2 class="mb-6 text-2xl font-bold text-kunista-black">Kontaktuppgifter</h2>
            <div class="space-y-6 text-zinc-700">
              <div>
                <h3 class="mb-1 font-semibold text-kunista-black">Besöksadress</h3>
                <p>Kunista AB</p>
                <p>Lantbruksvägen 12</p>
                <p>582 45 Linköping</p>
              </div>
              <div>
                <h3 class="mb-1 font-semibold text-kunista-black">Telefon</h3>
                <a href="tel:+46101234567" class="text-kunista-red hover:underline">010-123 45 67</a>
              </div>
              <div>
                <h3 class="mb-1 font-semibold text-kunista-black">E-post</h3>
                <a href="mailto:info@kunista.se" class="text-kunista-red hover:underline">info@kunista.se</a>
              </div>
              <div>
                <h3 class="mb-1 font-semibold text-kunista-black">Öppettider</h3>
                <p>Måndag–fredag: 07:00–17:00</p>
                <p>Lördag–söndag: Stängt</p>
              </div>
            </div>

            <div class="mt-10 rounded-2xl bg-zinc-100 p-2">
              <img
                src="https://placehold.co/800x500/1A1A1A/FFFFFF?text=Kunista+Linköping"
                alt="Kunistas anläggning i Linköping"
                class="rounded-xl object-cover"
              >
            </div>
          </div>

          <!-- Kontaktformulär -->
          <div class="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
            <h2 class="mb-6 text-2xl font-bold text-kunista-black">Skicka ett meddelande</h2>
            <ContactForm :subject="subject" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
