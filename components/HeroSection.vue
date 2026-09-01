<script setup lang="ts">
/**
 * Startsidans hero-sektion med bakgrundsbild, rubrik och två CTA-knappar.
 */
</script>

<template>
  <section class="relative flex min-h-[600px] items-center overflow-hidden" aria-label="Välkommen till Kunista">
    <!-- Bakgrundsvideo -->
    <ClientOnly>
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/Tractor_driving_on_field_202608311027.mp4" type="video/mp4">
      </video>
    </ClientOnly>

    <!-- Overlay gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-kunista-black/90 to-kunista-black/40" />

    <!-- Content -->
    <div class="container-kunista relative z-10 py-24">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Kunista – lantbruksmaskiner du kan lita på
        </h1>
        <p class="mt-6 text-lg text-zinc-200 sm:text-xl">
          Vi är din svenska partner för ny och begagnad lantbruksteknik.
          Hitta jordbruksmaskiner, maskinuthyrning och service med fokus på kvalitet och Sverige.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <BaseButton to="/ny-teknik" variant="primary">
            Se ny teknik
          </BaseButton>
          <BaseButton to="/kontakt" variant="secondary">
            Sälj din maskin
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
