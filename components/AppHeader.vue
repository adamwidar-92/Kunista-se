<script setup lang="ts">
/**
 * Global header med logotyp, navigation och mobilmeny.
 */
const menuOpen = ref(false)

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Ny teknik', to: '/ny-teknik' },
  { label: 'Begagnad teknik', to: '/begagnad-teknik' },
  { label: 'Teknikuthyrning', to: '/teknikuthyrning' },
  { label: 'Kontakt', to: '/kontakt' }
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
    <div class="container-kunista flex h-20 items-center justify-between">
      <!-- Logotyp -->
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Kunista - startsida">
        <img src="/images/Kunista logo.jpg" alt="Kunista logotyp" class="h-16 w-auto">
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-8 md:flex" aria-label="Huvudnavigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-kunista-black transition-colors hover:text-kunista-red"
          active-class="text-kunista-red"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- CTA desktop -->
      <div class="hidden md:block">
        <NuxtLink
          to="/kontakt"
          class="inline-flex items-center justify-center rounded bg-kunista-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-kunista-red-dark"
        >
          Sälj din maskin
        </NuxtLink>
      </div>

      <!-- Mobilmeny-knapp -->
      <button
        class="inline-flex items-center justify-center rounded-md p-2 text-kunista-black md:hidden"
        aria-label="Öppna meny"
        aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobil navigation -->
    <div
      v-if="menuOpen"
      class="border-t border-zinc-100 bg-white md:hidden"
    >
      <nav class="container-kunista flex flex-col gap-4 py-6" aria-label="Mobil navigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-base font-medium text-kunista-black"
          active-class="text-kunista-red"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/kontakt"
          class="mt-2 inline-flex items-center justify-center rounded bg-kunista-red px-5 py-3 text-center font-semibold text-white"
          @click="menuOpen = false"
        >
          Sälj din maskin
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
