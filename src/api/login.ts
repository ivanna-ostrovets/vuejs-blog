import { apiFetch } from '@/api/apiHelpers';
import type { User } from '@/types/types';

export async function login(username: string, password: string) {
  return await apiFetch<User>({
    url: '/login',
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}
