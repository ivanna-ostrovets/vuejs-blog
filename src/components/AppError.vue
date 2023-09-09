<script setup lang="ts">
defineProps<{ error: string | undefined }>();
</script>

<template>
  <div
    v-if="error"
    data-test="error"
    class="text-red-600 mb-3.5 py-4 bg-red-200 w-full rounded-md text-center border-[1px] border-red-600"
  >
    Error: {{ error }}
  </div>
</template>
