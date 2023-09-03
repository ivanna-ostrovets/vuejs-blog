<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import AppButton from '@/components/AppButton.vue';
import AppRouterLink from '@/components/AppRouterLink.vue';
import BlogLogo from '@/components/BlogLogo.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

import router, { Routes } from './router';

function navigateToLoginScreen() {
  router.push(Routes.login);
}
</script>

<template>
  <div class="w-full p-4">
    <header class="flex items-center w-full">
      <BlogLogo />

      <nav class="flex gap-8 text-xl ml-8">
        <AppRouterLink :path="Routes.home" text="Home" />
        <AppRouterLink :path="Routes.tags" text="Tags" />
        <AppRouterLink :path="Routes.about" text="About" />
      </nav>

      <RouterLink :to="Routes.search" class="ml-auto mr-8 hover:scale-125">
        <IconSearch />
      </RouterLink>

      <AppButton :on-click="navigateToLoginScreen" text="Login" class="w-[135px] h-[46px]" />
    </header>

    <RouterView />
  </div>
</template>
