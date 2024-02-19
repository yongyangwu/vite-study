<template>
  <div>
    <bmw-descriptions title="详情" :list="list"></bmw-descriptions>
  </div>
</template>
<script lang="ts" setup>
import { BmwDescriptions } from "@bobwu/components";
import { reactive } from "vue";
import MyComponent from "./src/demo.vue";
const myComponentInstance = new MyComponent();
// const myComponentInstance: InstanceType<typeof MyComponent> = new MyComponent(); // 创建 MyComponent 实例，并指定类型
myComponentInstance;
const list = reactive([
  {
    label: "UserName",
    text: "bobwu",
  },
  {
    label: "Phone",
    text: "17625902831",
  },
]);
</script>
