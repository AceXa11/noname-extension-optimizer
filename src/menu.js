import { game } from "noname";
import { loadStyles, removeStyles } from "./utils.js";
class Menu {
  constructor() {
    this.optionName = "menu_center";
  }
  onclick(item) {
    game.saveExtensionConfig("optimizer", this.optionName, item);
    if (item) {
      loadStyles(this.optionName);
    } else {
      removeStyles(this.optionName);
    }
  }
  applyFromConfig() {
    this.onclick(game.getExtensionConfig("optimizer", this.optionName));
  }
}
let _menu = null;
function getMenu() {
  if (!_menu) {
    _menu = new Menu();
  }
  return _menu;
}
const menu_center = {
  name: "菜单中心显示",
  init: false,
  intro: "开启后菜单将会在屏幕中心显示",
  onclick: (item) => {
    getMenu().onclick(item);
  }
};
export {
  Menu,
  getMenu,
  menu_center
};
