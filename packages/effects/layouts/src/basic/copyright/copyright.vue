<script lang="ts" setup>
interface Props {
  companyName?: string;
  companySiteLink?: string;
  date?: string;
}

defineOptions({
  name: 'Copyright',
});

withDefaults(defineProps<Props>(), {
  companyName: '',
  companySiteLink: '',
  date: '',
});
</script>

<template>
  <div class="text-md flex-center">
    <!-- Copyright Text -->
    Copyright © {{ date }}

    <!-- Company Link -->
    <a
      v-if="companyName"
      :href="companySiteLink || 'javascript:void(0)'"
      class="mx-1 hover:text-primary-hover"
      target="_blank"
    >
      {{ companyName }}
    </a>
  </div>
</template>
