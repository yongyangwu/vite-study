import type { VNodeChild } from "vue";

export interface DesciptionItemProps<T> {
  label: string;
  text: string | number;
  render?: (scope: RenderScope<T>) => VNodeChild;
}
export type RenderScope<T> = {
  row: T;
};
export interface DescriptionProps<T = any> {
  title: string;
  list?: DesciptionItemProps<T>[];
}
