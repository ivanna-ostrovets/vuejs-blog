import type { Ref } from 'vue';

import { useApiFetch } from '@/api/apiHelpers';
import type { Post } from '@/types/types';

export async function getFeaturedPost(onSuccess: (value: Post) => void, errorRef: Ref<string>) {
  return useApiFetch<Post>({ url: '/posts/1', onSuccess, errorRef });
}
