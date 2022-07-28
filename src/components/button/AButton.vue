<template>
  <button>
    <slot />
  </button>
</template>

<script setup></script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AButton',
});
</script>
