<script setup lang="ts">
/**
 * Återanvändbar knapp med två varianter: primär (röd) och sekundär (vit/svart outline).
 */
withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    type: 'button'
  }
)

const baseClasses =
  'inline-flex items-center justify-center rounded px-6 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-kunista-red focus:ring-offset-2'

const variantClasses = {
  primary: 'bg-kunista-red text-white hover:bg-kunista-red-dark',
  secondary: 'border-2 border-kunista-black bg-white text-kunista-black hover:bg-kunista-black hover:text-white'
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[baseClasses, variantClasses[variant]]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="[baseClasses, variantClasses[variant]]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="[baseClasses, variantClasses[variant]]"
  >
    <slot />
  </button>
</template>
