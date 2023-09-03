<script setup lang="ts">
const props = defineProps<{
  text: string;
  onClick: () => void;
}>();
</script>

<template>
  <button
    @click="props.onClick"
    class="text-primary text-xl border-2 border-primary rounded-lg hover:bg-warmGray-100"
  >
    {{ props.text }}
  </button>
</template>
