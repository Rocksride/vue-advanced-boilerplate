<template>
  <button :class="$style.button" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss" module>
@import '@design';

.button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50%;
}
</style>
