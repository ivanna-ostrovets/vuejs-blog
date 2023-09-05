<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Routes } from '@/router';

defineProps<{ path: Routes; text: string }>();
</script>

<template>
  <RouterLink :to="path" active-class="font-bold" class="link hover:font-bold" :data-text="text">
    {{ text }}
  </RouterLink>
</template>

<style scoped>
.link::after {
  display: block;
  content: attr(data-text);
  font-weight: bold;
  height: 0;
  overflow: hidden;
  visibility: hidden;

  @media speech {
    display: none;
  }
}
</style>
