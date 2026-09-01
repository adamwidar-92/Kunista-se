<script setup lang="ts">
/**
 * Global footer med kontaktinformation, snabblänkar och juridisk info.
 */
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Hem', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Ny teknik', to: '/ny-teknik' },
  { label: 'Begagnad teknik', to: '/begagnad-teknik' },
  { label: 'Teknikuthyrning', to: '/teknikuthyrning' },
  { label: 'Kontakt', to: '/kontakt' }
]
</script>

<template>
  <footer class="bg-kunista-black py-16 text-white">
    <div class="container-kunista grid gap-12 md:grid-cols-3">
      <!-- Om Kunista -->
      <div>
        <div class="mb-6 flex items-center gap-3">
          <img src="/images/Kunista logo.jpg" alt="Kunista logotyp" class="h-12 w-auto">
        </div>
        <p class="max-w-sm text-zinc-400">
          Kunista är din svenska partner för lantbruksmaskiner, jordbruksmaskiner och
          maskinuthyrning. Vi säljer ny Metal-Fach-teknik, förmedlar begagnade maskiner
          och hjälper dig att sälja lantbruksmaskiner i Sverige.
        </p>
      </div>

      <!-- Snabblänkar -->
      <div>
        <h3 class="mb-6 text-lg font-semibold text-white">Snabblänkar</h3>
        <ul class="space-y-3">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="text-zinc-400 transition hover:text-kunista-red">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Kontakt -->
      <div>
        <h3 class="mb-6 text-lg font-semibold text-white">Kontakt</h3>
        <address class="not-italic text-zinc-400">
          <p class="mb-2">Kunista AB</p>
          <p class="mb-2">Lantbruksvägen 12</p>
          <p class="mb-4">582 45 Linköping</p>
          <p class="mb-2">
            Telefon:
            <a href="tel:+46101234567" class="text-white hover:underline">010-123 45 67</a>
          </p>
          <p class="mb-4">
            E-post:
            <a href="mailto:info@kunista.se" class="text-white hover:underline">info@kunista.se</a>
          </p>
          <p>
            <a href="https://www.blocket.se/mobility/search/b2b/agriculturetools?orgId=1146743" target="_blank" rel="noopener noreferrer" class="text-kunista-red hover:underline font-medium">
              Begagnade maskiner på Blocket
            </a>
          </p>
        </address>
      </div>
    </div>

    <div class="container-kunista mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
      <p>&copy; {{ currentYear }} Kunista AB. Alla rättigheter förbehållna.</p>
    </div>
  </footer>
</template>
