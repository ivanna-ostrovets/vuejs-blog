import { StorageSerializers, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { Ref } from 'vue';

import type { User } from '@/types/types';

export const useUserStore = defineStore('user', () => {
  const user: Ref<User | null> = useLocalStorage<User | null>('user', null, {
    serializer: StorageSerializers.object,
  });

  function addUser(newUser: User) {
    user.value = newUser;
  }

  function removeUser() {
    user.value = null;
  }

  return { user, addUser, removeUser };
});
