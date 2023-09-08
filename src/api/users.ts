import type { Ref } from 'vue';

import { useApiFetch } from '@/api/apiHelpers';
import type { User } from '@/types/types';

export async function getUserById(
  id: number,
  onSuccess: (value: User) => void,
  errorRef: Ref<string>,
) {
  return useApiFetch<User>({ url: `/users/${id}`, onSuccess, errorRef });
}
