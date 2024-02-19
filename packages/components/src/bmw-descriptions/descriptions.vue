<template>
  <el-descriptions :title="props.title" border>
    <el-descriptions-item v-for="item in props.list" :label="item.label">{{
      item.text
    }}</el-descriptions-item>

    <!-- <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    > -->
  </el-descriptions>
</template>
<script lang="ts" setup>
import { ElDescriptions, ElDescriptionsItem } from "element-plus";
import { DescriptionProps } from "./type";
defineOptions({ name: "bmw-descriptions" });
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<DescriptionProps>(), {
  title: "默认标题",
  list: () => [],
});
</script>
