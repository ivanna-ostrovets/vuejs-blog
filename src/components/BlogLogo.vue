<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Routes } from '@/router';
</script>

<template>
  <RouterLink :to="Routes.home" class="flex h-[58px] font-bold text-3xl leading-normal">
    <div class="bg-primary w-[58px] flex justify-end items-end text-white">in</div>
    <div class="flex justify-end items-end">stinct.</div>
  </RouterLink>
</template>
