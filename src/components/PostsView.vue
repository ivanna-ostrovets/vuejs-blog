<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { getPostById } from '@/api/posts';
import { getUserById } from '@/api/users';
import AppError from '@/components/AppError.vue';
import AppLoading from '@/components/AppLoading.vue';
import PostsLink from '@/components/PostsLink.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import { formatDate, getRandomDate } from '@/helpers/dateHelpers';
import router, { Routes } from '@/router';
import type { Post, User } from '@/types/types';

const route = useRoute();

const error = ref('');
const date = ref<string>();
const image = ref<string>();
const post = ref<Post>();
const user = ref<User>();

const nextPostId = ref<number>();

const loadData = async () => {
  const postId = Number(route.params.id);

  date.value = formatDate(getRandomDate());
  nextPostId.value = undefined;

  await getPostById(postId, value => (post.value = value), error);
  image.value = `https://picsum.photos/id/${postId}/1316/592`;

  if (post.value?.userId) {
    await getUserById(post.value?.userId, value => (user.value = value), error);
  }

  const nextPostResponse = await getPostById(postId + 1);
  if (nextPostResponse) {
    nextPostId.value = nextPostResponse.id;
  }
};

onBeforeMount(loadData);
watch(route, loadData);
</script>

<template>
  <div class="flex flex-col place-items-center place-content-center">
    <AppLoading v-if="!post && !user && !error" />

    <AppError :error="error" />

    <template v-if="post && user && !error">
      <div
        class="w-full h-[592px] bg-center bg-no-repeat bg-cover mb-14"
        :style="{ 'background-image': 'url(https://picsum.photos/id/' + post.id + '/1316/592)' }"
      />

      <div class="lg:w-1/2">
        <div class="text-4xl font-title font-bold text-center mb-8">{{ post.title }}</div>

        <div class="my-3 text-base text-center text-textSecondary">
          {{ user.firstName }} {{ user.lastName }} &#x2022; {{ date }}
        </div>

        <div class="mb-8 text-base text-textSecondary flex gap-2 place-content-center">
          <span v-for="tag in post.tags" :key="tag">#{{ tag.toLowerCase() }}</span>
        </div>

        <div class="text-base text-justify mb-16">
          {{ post.body }}
        </div>

        <div class="mb-4 text-xl text-textSecondary place-self-start">ABOUT THE AUTHOR</div>

        <div class="flex gap-9 mb-40">
          <UserAvatar :image="user.image" class="w-40 h-40 shrink-0" />

          <div>
            <div class="font-title font-bold text-3xl">
              {{ user.firstName }} {{ user.lastName }}
            </div>

            <div class="text-base text-textSecondary mb-3">@{{ user.username }}</div>

            <div class="text-base text-justify">
              Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea.
              Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum
              deserunt quis.
            </div>
          </div>
        </div>
      </div>

      <div class="w-[calc(100%+2rem)] -mb-4 flex justify-between">
        <PostsLink type="back" @click="router.back()" />
        <PostsLink
          v-if="nextPostId !== undefined"
          type="next"
          @click="router.push({ path: `${Routes.post}/${nextPostId}` })"
        />
      </div>
    </template>
  </div>
</template>
