import { defineComponent } from "vue";
import "./style.less";
export default defineComponent({
  name: "aside-menu",
  setup() {
    return () => (
      <div class="menu-wrap">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-sub-menu
            index="1"
            v-slots={{
              title: () => <div>title</div>,
            }}
          >
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu
            index="2"
            v-slots={{
              title: () => <div>title</div>,
            }}
          >
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item one</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    );
  },
});
