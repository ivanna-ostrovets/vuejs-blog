<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }>(),
  { disabled: false, type: 'button' },
);

defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <button
    :disabled="disabled"
    :type="type"
    class="text-primary text-xl font-title border-2 border-primary rounded-lg hover:bg-warmGray-100 disabled:text-textSecondary disabled:border-textSecondary disabled:bg-transparent"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
