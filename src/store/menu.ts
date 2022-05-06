/**
 * 菜单数据和tab的数据
 * */
import { defineStore } from "pinia";

interface MenuItem {
  path: string;
  name: string;
  meta: Record<string, unknown>;
}

interface MenuStoreState {
  menus: MenuItem[];
  tabs: MenuItem[];
}

const menuStore = defineStore<"menuStore", MenuStoreState>({
  id: "menuStore",
  state() {
    return {
      menus: [],
      tabs: [],
    };
  },
  actions: {},
});

export default menuStore;
