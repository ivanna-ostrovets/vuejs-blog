<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }>(),
  { disabled: false, type: 'button' },
);

defineEmits<{ onClick: [] }>();
</script>

<template>
  <button
    :disabled="disabled"
    :type="type"
    @click="$emit('onClick')"
    class="text-primary text-xl border-2 border-primary rounded-lg hover:bg-warmGray-100 disabled:text-textSecondary disabled:border-textSecondary disabled:bg-transparent"
  >
    {{ text }}
  </button>
</template>
