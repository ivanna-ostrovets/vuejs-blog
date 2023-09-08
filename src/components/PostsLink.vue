<script setup lang="ts">
import IconBackButton from '@/components/icons/IconBackButton.vue';
import IconNextButton from '@/components/icons/IconNextButton.vue';

defineProps<{ type: 'back' | 'next' }>();
defineEmits<{ click: [] }>();
</script>

<template>
  <button
    class="font-title text-xl flex place-items-center gap-3 justify-items-end"
    :class="{ 'flex-row-reverse': type === 'back' }"
    @click="$emit('click')"
  >
    <span>{{ type === 'back' ? 'Back To' : 'Next Up' }}</span>
    <IconBackButton v-if="type === 'back'" />
    <IconNextButton v-else />
  </button>
</template>
