import { StorageSerializers, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

import type { User } from '@/types/types';

export const useUserStore = defineStore('user', () => {
  const user = useLocalStorage<User>('user', null, {
    serializer: StorageSerializers.object,
  });

  function addUser(newUser: User) {
    user.value = newUser;
  }

  return { user, addUser };
});
