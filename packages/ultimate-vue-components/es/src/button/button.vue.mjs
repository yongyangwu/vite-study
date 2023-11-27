import { defineComponent as e, computed as a, openBlock as l, createElementBlock as u, Fragment as c, createElementVNode as s, normalizeClass as p, renderSlot as m, createVNode as d, unref as f, withCtx as _, createTextVNode as i } from "vue";
import "./style/index.css";
import { ElTag as b } from "element-plus";
const w = e({ name: "ea-button" }), N = /* @__PURE__ */ e({
  ...w,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = a(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (r, y) => (l(), u(c, null, [
      s("button", {
        class: p(["ea-button", n.value])
      }, [
        m(r.$slots, "default")
      ], 2),
      d(f(b), null, {
        default: _(() => [
          i("www")
        ]),
        _: 1
      })
    ], 64));
  }
});
export {
  N as default
};
