import type { Ref } from 'vue';

import { useApiFetch } from '@/api/apiHelpers';
import router, { Routes } from '@/router';
import { useUserStore } from '@/stores/user';
import type { User } from '@/types/types';

export async function login(username: string, password: string, errorRef: Ref<string>) {
  return useApiFetch<User>({
    url: '/auth/login',
    method: 'POST',
    body: JSON.stringify({ username, password }),
    onSuccess: async value => {
      const userStore = useUserStore();
      userStore.addUser(value);
      await router.push(Routes.home);
    },
    errorRef,
  });
}
