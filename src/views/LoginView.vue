<script setup lang="ts">
import { ref } from 'vue';

import { login } from '@/api/login';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import IconPassword from '@/components/icons/IconPassword.vue';
import IconUser from '@/components/icons/IconUser.vue';
import router, { Routes } from '@/router';
import { useUserStore } from '@/stores/user';

const username = ref('');
const password = ref('');

const error = ref('');

const userStore = useUserStore();

if (userStore.user) router.push(Routes.home);

async function handleLogin() {
  error.value = (await login(username.value, password.value)).error.value;
}
</script>

<template>
  <main class="w-80 m-auto mt-[10%] flex flex-col items-center place-content-center gap-4">
    <div class="text-3xl font-bold font-title">Welcome Back!</div>

    <div class="text-base my-3.5">Sign in to get the most out of instinct.</div>

    <div
      v-if="error"
      class="text-red-600 mb-3.5 py-4 bg-red-200 w-full rounded-md text-center border-[1px] border-red-600"
    >
      Error: {{ error }}
    </div>

    <form class="w-full flex flex-col gap-4" @submit.prevent="handleLogin">
      <AppInput v-model="username" placeholder="Username" autocomplete="username">
        <template #icon>
          <IconUser />
        </template>
      </AppInput>

      <AppInput
        v-model="password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
      >
        <template #icon>
          <IconPassword />
        </template>
      </AppInput>

      <AppButton
        type="submit"
        text="Login"
        class="w-full h-14"
        :disabled="!username || !password"
      />
    </form>
  </main>
</template>
