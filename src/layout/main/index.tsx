import { defineComponent, ref } from "vue";
import "./style.less";
import asideMenu from "@/layout/component/aside";
import layoutHeader from "@/layout/component/header";
import layoutLogo from "@/layout/component/logo";

export default defineComponent({
  name: "layout-component",
  components: {
    asideMenu,
    layoutHeader,
    layoutLogo,
  },
  setup() {
    const tabCurrentIndex = ref("");
    return () => (
      <div id="main">
        <aside class="menu">
          <layout-logo />
          <aside-menu />
        </aside>
        <div class="main">
          <layout-header />
          <div class="tab-wrap">
            <el-tabs
              id="Tabs"
              v-model={tabCurrentIndex.value}
              type="card"
              closable
            >
              <el-tab-pane>sssss</el-tab-pane>
              <el-tab-pane>faas</el-tab-pane>
            </el-tabs>
          </div>
          <main class="content-wrap"></main>
        </div>
      </div>
    );
  },
});
