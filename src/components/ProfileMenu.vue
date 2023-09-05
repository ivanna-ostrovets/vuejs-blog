<script setup lang="ts">
import { Dropdown } from 'floating-vue';

import UserAvatar from '@/components/UserAvatar.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<template>
  <Dropdown popper-class="bg-white border rounded-2xl shadow-2xl w-[170px] font-text">
    <UserAvatar :image="userStore.user?.image || ''" class="cursor-pointer" />

    <template #popper>
      <ul>
        <li class="px-5 py-4 border-b">
          <div class="font-bold text-base">
            {{ userStore.user?.firstName }} {{ userStore.user?.lastName }}
          </div>
          <div class="text-sm text-textSecondary">@{{ userStore.user?.username }}</div>
        </li>

        <li class="px-5 py-2.5 hover:bg-gray-100 cursor-pointer">Write a post</li>

        <li
          class="px-5 py-2.5 hover:bg-gray-100 cursor-pointer rounded-b-2xl"
          @click="userStore.removeUser"
        >
          Sign out
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  background: inherit;
  color: inherit;
  border-radius: 0;
  border: none;
  box-shadow: none;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
