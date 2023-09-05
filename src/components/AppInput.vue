<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'text' | 'password';
    placeholder: string;
    autocomplete: string;
    modelValue: string;
  }>(),
  { type: 'text' },
);

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="flex items-center h-14 w-full bg-inputBackground rounded-lg text-text text-sm">
    <div class="mx-3.5"><slot name="icon" /></div>
    <input
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="modelValue"
      class="placeholder:text-base placeholder:text-textSecondary bg-transparent h-full w-full outline-0 pr-4"
      @input="handleChange"
    />
  </div>
</template>

<style scoped>
div:has(input:-webkit-autofill),
div:has(input:-webkit-autofill:hover),
div:has(input:-webkit-autofill:focus) {
  background-color: #e8f0fe;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px #e8f0fe inset;
  background-color: transparent !important;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  border-radius: 10px;
}
</style>
