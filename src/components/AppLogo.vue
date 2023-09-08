<script setup lang="ts">
import { Routes } from '@/router';
</script>

<template>
  <router-link :to="Routes.home" class="flex h-[58px] font-bold text-3xl leading-normal">
    <div class="bg-primary w-[58px] flex justify-end items-end text-white">in</div>
    <div class="flex justify-end items-end">stinct.</div>
  </router-link>
</template>
