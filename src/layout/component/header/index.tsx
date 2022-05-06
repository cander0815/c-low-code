import { defineComponent } from "vue";
import "./style.less";

export default defineComponent({
  name: "layout-header",
  components: {},
  setup() {
    return () => <header class="header-wrap">我是头部</header>;
  },
});
