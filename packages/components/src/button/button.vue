// button.vue
<template>
  <button class="ea-button" :class="buttonStyle"><slot /></button>
  <el-tag>www</el-tag>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ea-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
import { ElTag } from "element-plus";
</script>
