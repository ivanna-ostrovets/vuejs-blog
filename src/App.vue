<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import AppButton from '@/components/AppButton.vue';
import AppRouterLink from '@/components/AppRouterLink.vue';
import BlogLogo from '@/components/BlogLogo.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import ProfileMenu from '@/components/ProfileMenu.vue';
import { useUserStore } from '@/stores/user';

import router, { Routes } from './router';

const userStore = useUserStore();

function navigateToLoginScreen() {
  router.push(Routes.login);
}
</script>

<template>
  <div class="w-full p-4 text-text">
    <header class="flex items-center w-full font-title">
      <BlogLogo />

      <nav class="flex gap-8 text-xl ml-8">
        <AppRouterLink :path="Routes.home" text="Home" />
        <AppRouterLink :path="Routes.tags" text="Tags" />
        <AppRouterLink :path="Routes.about" text="About" />
      </nav>

      <RouterLink :to="Routes.search" class="ml-auto mr-8 hover:scale-125">
        <IconSearch />
      </RouterLink>

      <AppButton
        v-if="!userStore.user"
        text="Login"
        class="w-[135px] h-[46px]"
        @click="navigateToLoginScreen"
      />
      <ProfileMenu v-else />
    </header>

    <RouterView />
  </div>
</template>
