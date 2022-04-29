import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-component",
  setup() {
    return () => <header>我是头部</header>;
  },
});
