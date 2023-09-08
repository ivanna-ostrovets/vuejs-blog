<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppHeader from '@/components/AppHeader.vue';

// TODO: try transitions
</script>

<template>
  <div class="w-full p-4 text-text">
    <AppHeader />
    <RouterView />
  </div>
</template>
