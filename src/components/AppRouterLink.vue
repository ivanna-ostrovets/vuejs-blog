<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Routes } from '@/router';

const props = defineProps<{
  path: Routes;
  text: string;
}>();
</script>

<template>
  <RouterLink :to="path" active-class="font-bold" class="hover:font-bold">
    {{ props.text }}
  </RouterLink>
</template>
