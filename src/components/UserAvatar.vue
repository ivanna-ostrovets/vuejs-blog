<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue';

defineProps<{ image: string }>();
</script>

<template>
  <div class="w-14 h-14 flex place-items-center place-content-center rounded-full border-2">
    <img v-if="image !== ''" :src="image" alt="user image" class="rounded-full" />
    <IconUser v-else class="" />
  </div>
</template>
