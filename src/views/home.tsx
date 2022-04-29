import { defineComponent } from "vue";

export default defineComponent({
  name: "home-page",
  setup() {
    return () => {
      return (
        <>
          <h1>home页面</h1>
          <el-button>clime me</el-button>
        </>
      );
    };
  },
});
