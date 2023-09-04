import { StorageSerializers, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { Ref } from 'vue';

import type { User } from '@/types/types';

export const useUserStore = defineStore('user', () => {
  const user: Ref<User> = useLocalStorage<User>('user', null, {
    serializer: StorageSerializers.object,
  });

  function addUser(newUser: User) {
    user.value = newUser;
  }

  return { user, addUser };
});
