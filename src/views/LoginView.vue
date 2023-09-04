<script setup lang="ts">
import { ref } from 'vue';

import { login } from '@/api/login';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import IconPassword from '@/components/icons/IconPassword.vue';
import IconUser from '@/components/icons/IconUser.vue';
import router, { Routes } from '@/router';
import { useUserStore } from '@/stores/user';
import type { User } from '@/types/types';

const username = ref('');
const password = ref('');

const error = ref('');

const userStore = useUserStore();

if (userStore.user) router.push(Routes.home);

function instanceOfUser(object: any): object is User {
  return 'id' in object;
}

async function handleLogin() {
  const response = await login(username.value, password.value);

  if (instanceOfUser(response)) {
    userStore.addUser(response);
    await router.push(Routes.home);
  } else {
    error.value = response.error;
  }
}
</script>

<template>
  <main class="w-80 m-auto mt-[10%] flex flex-col items-center place-content-center gap-4">
    <div class="text-3xl font-bold">Welcome Back!</div>

    <div class="text-base my-3.5">Sign in to get the most out of instinct.</div>

    <div
      v-if="error"
      class="text-red-600 mb-3.5 py-4 bg-red-200 w-full rounded-md text-center border-[1px] border-red-600"
    >
      Error: {{ error }}
    </div>

    <form class="w-full flex flex-col gap-4" @submit.prevent="handleLogin">
      <AppInput placeholder="Username" autocomplete="username" v-model="username">
        <template v-slot:icon>
          <IconUser />
        </template>
      </AppInput>

      <AppInput
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        v-model="password"
      >
        <template v-slot:icon>
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
