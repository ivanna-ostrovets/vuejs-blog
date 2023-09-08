<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppLogo from '@/components/AppLogo.vue';
import AppRouterLink from '@/components/AppRouterLink.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import UserProfileMenu from '@/components/UserProfileMenu.vue';
import router, { Routes } from '@/router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

function navigateToLoginScreen() {
  router.push(Routes.login);
}
</script>

<template>
  <header class="flex items-center w-full font-title mb-10">
    <AppLogo />

    <nav class="flex gap-8 text-xl ml-8">
      <AppRouterLink :path="Routes.home" text="Home" />
      <AppRouterLink :path="Routes.tags" text="Tags" />
      <AppRouterLink :path="Routes.about" text="About" />
    </nav>

    <router-link :to="Routes.search" class="ml-auto mr-8 hover:scale-125">
      <IconSearch />
    </router-link>

    <AppButton
      v-if="!userStore.user"
      text="Login"
      class="w-[135px] h-[46px]"
      @click="navigateToLoginScreen"
    />
    <UserProfileMenu v-else />
  </header>
</template>
