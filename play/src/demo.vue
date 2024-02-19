<template>
  <div>
    <button :disabled="props.isDisabled">Click me</button>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(["isDisabled"]);
</script>
