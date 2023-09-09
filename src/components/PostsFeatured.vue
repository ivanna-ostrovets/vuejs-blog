<script setup lang="ts">
import { DateTime } from 'luxon';
import { computed, onBeforeMount, ref } from 'vue';

import { getFeaturedPost } from '@/api/posts';
import { getUserById } from '@/api/users';
import AppError from '@/components/AppError.vue';
import AppLoading from '@/components/AppLoading.vue';
import { formatDate, getRandomDate } from '@/helpers/dateHelpers';
import { Routes } from '@/router';
import type { Post, User } from '@/types/types';

const error = ref('');
const post = ref<Post>();
const user = ref<User>();

const date = computed(() =>
  formatDate(getRandomDate({ start: DateTime.now().minus({ days: 14 }) })),
);

onBeforeMount(async () => {
  await getFeaturedPost(value => (post.value = value), error);

  if (post.value?.userId) {
    await getUserById(post.value?.userId, value => (user.value = value), error);
  }
});
</script>

<template>
  <div class="h-[592px] flex place-items-center place-content-center">
    <AppLoading v-if="!post && !user && !error" />

    <AppError :error="error" />

    <div
      v-if="post && user && !error"
      class="bg-[url('https://picsum.photos/seed/qeopepep/1316/592')] w-full h-full bg-center bg-no-repeat bg-cover"
    >
      <div class="ml-12 px-10 pt-16 bg-white w-[510px] h-[480px]">
        <div class="text-textSecondary text-xl">FEATURED ARTICLE</div>

        <router-link
          :to="{ path: `${Routes.post}/${post.id}` }"
          class="text-3xl font-title font-bold"
        >
          {{ post.title }}
        </router-link>

        <div class="py-3.5 text-base text-textSecondary">
          {{ user.firstName }} {{ user.lastName }} &#x2022; {{ date }}
        </div>

        <div class="text-base">
          {{ post.body }}
        </div>
      </div>
    </div>
  </div>
</template>
