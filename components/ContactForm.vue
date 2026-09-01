<script setup lang="ts">
/**
 * Återanvändbart kontaktformulär för förfrågningar och försäljning av maskiner.
 */
const props = withDefaults(defineProps<{
  subject?: string
}>(), {
  subject: ''
})

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const submitted = ref(false)

function onSubmit() {
  // Här skulle en riktig implementation skicka data till ett API eller e-post.
  // För närvarande visas en bekräftelse direkt i gränssnittet.
  submitted.value = true
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <div v-if="submitted" class="rounded-lg bg-green-50 p-6 text-center text-green-800">
      <p class="text-lg font-semibold">Tack för din förfrågan!</p>
      <p>Vi återkommer till dig så snart som möjligt.</p>
    </div>

    <template v-else>
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label for="contact-name" class="mb-2 block text-sm font-medium text-kunista-black">
            Namn
          </label>
          <input
            id="contact-name"
            v-model="name"
            type="text"
            required
            class="w-full rounded border border-zinc-300 px-4 py-2.5 focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
          >
        </div>
        <div>
          <label for="contact-email" class="mb-2 block text-sm font-medium text-kunista-black">
            E-post
          </label>
          <input
            id="contact-email"
            v-model="email"
            type="email"
            required
            class="w-full rounded border border-zinc-300 px-4 py-2.5 focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
          >
        </div>
      </div>

      <div>
        <label for="contact-phone" class="mb-2 block text-sm font-medium text-kunista-black">
          Telefon
        </label>
        <input
          id="contact-phone"
          v-model="phone"
          type="tel"
          class="w-full rounded border border-zinc-300 px-4 py-2.5 focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
        >
      </div>

      <div>
        <label for="contact-subject" class="mb-2 block text-sm font-medium text-kunista-black">
          Ärende
        </label>
        <input
          id="contact-subject"
          :value="subject"
          type="text"
          readonly
          class="w-full rounded border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-zinc-500"
        >
      </div>

      <div>
        <label for="contact-message" class="mb-2 block text-sm font-medium text-kunista-black">
          Meddelande
        </label>
        <textarea
          id="contact-message"
          v-model="message"
          rows="5"
          required
          class="w-full rounded border border-zinc-300 px-4 py-2.5 focus:border-kunista-red focus:outline-none focus:ring-1 focus:ring-kunista-red"
        />
      </div>

      <BaseButton type="submit" variant="primary">
        Skicka förfrågan
      </BaseButton>
    </template>
  </form>
</template>
