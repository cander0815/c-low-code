import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-logo",
  setup() {
    return () => <div class="logo-wrap">logo</div>;
  },
});
