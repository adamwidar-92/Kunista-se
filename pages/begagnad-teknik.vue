<script setup lang="ts">
/**
 * Sidan för begagnad teknik med två val: Blocket-butik eller sälj till Kunista.
 */
useSeoMeta({
  title: 'Begagnade lantbruksmaskiner – Kunista',
  description:
    'Sök bland begagnade lantbruksmaskiner via Kunistas Blocket-butik, eller sälj din maskin till oss. Vi köper jordbruksmaskiner över hela Sverige.'
})
</script>

<template>
  <div>
    <section class="bg-kunista-black py-24 text-white">
      <div class="container-kunista text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-kunista-red">Begagnad teknik</p>
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
          Begagnade lantbruksmaskiner
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          Hitta begagnade jordbruksmaskiner i vår Blocket-butik, eller kontakta oss för att sälja din maskin till Kunista.
        </p>
      </div>
    </section>

    <!-- Blocket Hero Banner - Förbättrad -->
    <section class="relative overflow-hidden bg-gradient-to-br from-kunista-red via-red-600 to-red-800 py-16 text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
      </div>
      <div class="container-kunista relative z-10 text-center">
        <div class="mb-6 flex justify-center">
          <div class="rounded-full bg-white bg-opacity-20 p-4 backdrop-blur-sm">
            <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <h2 class="mb-4 text-4xl font-bold sm:text-5xl">Sök bland tusentals begagnade maskiner</h2>
        <p class="mx-auto mb-10 max-w-xl text-lg text-red-50">
          Aktuella annonser på begagnade jordbruksmaskiner direkt på Blocket. Se priser, bilder och kontakta oss enkelt.
        </p>
        <BaseButton
          href="https://www.blocket.se/mobility/search/b2b/agriculturetools?orgId=1146743"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-white px-8 py-3 text-lg font-semibold text-kunista-red shadow-lg hover:bg-zinc-50 hover:shadow-xl transition-all"
        >
          <span>Sök på Blocket</span>
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </BaseButton>
      </div>
    </section>

    <section class="py-20">
      <div class="container-kunista">
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Blocket-val - Förbättrad -->
          <div class="group flex flex-col rounded-2xl bg-white p-10 shadow-sm transition hover:shadow-xl hover:scale-105 duration-300">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-kunista-red to-red-700">
              <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 class="mb-2 text-2xl font-bold text-kunista-black">
              Sök på Blocket
            </h2>
            <p class="mb-2 text-sm text-kunista-red font-semibold">Hitta maskiner direkt</p>
            <p class="mb-8 flex-1 text-zinc-600">
              Bläddra bland hundratals begagnade lantbruksmaskiner i Kunistas Blocket-katalog. Se priser, foton, specifikationer och kontakta oss direkt för förhandlingar.
            </p>
            <BaseButton
              href="https://www.blocket.se/mobility/search/b2b/agriculturetools?orgId=1146743"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              class="group/btn inline-flex items-center gap-2"
            >
              <span>Öppna Blocket-sökningen</span>
              <svg class="h-5 w-5 transition group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </BaseButton>
          </div>

          <!-- Sälj till Kunista - Förbättrad -->
          <div class="group flex flex-col rounded-2xl bg-gradient-to-br from-kunista-gray to-zinc-100 p-10 shadow-sm transition hover:shadow-xl hover:scale-105 duration-300">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-kunista-black">
              <svg class="h-8 w-8 text-kunista-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="mb-2 text-2xl font-bold text-kunista-black">
              Sälj din maskin
            </h2>
            <p class="mb-2 text-sm text-kunista-red font-semibold">Få ett rättvist pris</p>
            <p class="mb-8 flex-1 text-zinc-600">
              Vi köper begagnade lantbruksmaskiner av alla märken och skick. Fyll i formuläret och få en kostnadsfri värdering från våra experter inom kort.
            </p>
            <BaseButton
              to="/kontakt"
              variant="secondary"
              class="group/btn inline-flex items-center gap-2"
            >
              <span>Börja säljprocessen</span>
              <svg class="h-5 w-5 transition group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </BaseButton>
          </div>
        </div>

        <!-- Process - Förbättrad -->
        <div class="mt-20">
          <SectionTitle
            overline="Så säljer du"
            title="Så går det till att sälja din maskin"
            description="Vi gör processen enkel och transparent från start till mål."
            align="center"
          />
          <div class="grid gap-8 md:grid-cols-3">
            <div class="group relative rounded-2xl bg-gradient-to-br from-white to-zinc-50 p-8 text-center shadow-sm transition hover:shadow-xl hover:scale-105 duration-300 border border-zinc-100">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-kunista-red to-red-700 opacity-0 transition group-hover:opacity-5"></div>
              <div class="relative">
                <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-kunista-red text-2xl font-bold text-white">1</div>
                <h3 class="mb-3 text-xl font-bold text-kunista-black">Kontakta oss</h3>
                <p class="text-zinc-600">Skicka information om din maskin via formuläret eller ring oss direkt för en snabb konsultation.</p>
              </div>
            </div>
            <div class="group relative rounded-2xl bg-gradient-to-br from-white to-zinc-50 p-8 text-center shadow-sm transition hover:shadow-xl hover:scale-105 duration-300 border border-zinc-100">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-kunista-red to-red-700 opacity-0 transition group-hover:opacity-5"></div>
              <div class="relative">
                <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-kunista-red text-2xl font-bold text-white">2</div>
                <h3 class="mb-3 text-xl font-bold text-kunista-black">Få en värdering</h3>
                <p class="text-zinc-600">Vi granskar maskinens skick, slitage och funktionella status för ett rättvist och konkurrenskraftigt bud.</p>
              </div>
            </div>
            <div class="group relative rounded-2xl bg-gradient-to-br from-white to-zinc-50 p-8 text-center shadow-sm transition hover:shadow-xl hover:scale-105 duration-300 border border-zinc-100">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-kunista-red to-red-700 opacity-0 transition group-hover:opacity-5"></div>
              <div class="relative">
                <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-kunista-red text-2xl font-bold text-white">3</div>
                <h3 class="mb-3 text-xl font-bold text-kunista-black">Smidig affär</h3>
                <p class="text-zinc-600">Vi hämtar maskinen, ombesörjer transporten och överför betalningen till ditt konto på dagen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
