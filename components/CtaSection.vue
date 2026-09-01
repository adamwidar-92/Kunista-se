<script setup lang="ts">
/**
 * Call-to-action-sektion för sälj av maskin eller kontakt.
 */
</script>

<template>
  <section class="bg-kunista-red py-20 text-white">
    <div class="container-kunista text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Sälj din lantbruksmaskin – enkelt och tryggt
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-red-100">
        Har du en begagnad lantbruksmaskin som ska säljas? Vi köper maskiner över hela Sverige
        och ger dig en smidig affär från första kontakt till avtalad upphämtning.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <BaseButton to="/kontakt" variant="secondary">
          Kontakta oss
        </BaseButton>
        <BaseButton to="/begagnad-teknik" variant="secondary">
          Se begagnade maskiner
        </BaseButton>
      </div>
    </div>
  </section>
</template>
