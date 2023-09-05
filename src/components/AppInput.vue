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
