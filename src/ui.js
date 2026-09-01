import { game } from "noname";
import { loadStyles, removeStyles } from "./utils.js";
class OptimizerUI {
  constructor() {
    this.optionNameGlass = "glass_ui";
    this.optionNameIncreaseContrast = "increase_contrast_ui";
    this.optionNameDialog = "dialog_ui";
    this._updateBak = null;
    this.onclickGlass(game.getExtensionConfig("optimizer", this.optionNameGlass));
    this.onclickIncreaseContrast(game.getExtensionConfig("optimizer", this.optionNameIncreaseContrast));
    this.onclickDialog(game.getExtensionConfig("optimizer", this.optionNameDialog));
  }
  onclickGlass(item) {
    game.saveExtensionConfig("optimizer", this.optionNameGlass, item);
    if (item) {
      loadStyles(this.optionNameGlass);
    } else {
      removeStyles(this.optionNameGlass);
    }
  }
  onclickIncreaseContrast(item) {
    game.saveExtensionConfig("optimizer", this.optionNameIncreaseContrast, item);
    if (item) {
      loadStyles(this.optionNameIncreaseContrast);
    } else {
      removeStyles(this.optionNameIncreaseContrast);
    }
  }
  onclickDialog(item) {
    game.saveExtensionConfig("optimizer", this.optionNameDialog, item);
    if (item) {
      loadStyles(this.optionNameDialog);
    } else {
      removeStyles(this.optionNameDialog);
    }
  }
}
new OptimizerUI();
let _optimizer_ui = null;
function getOptimizerUI() {
  if (!_optimizer_ui) {
    _optimizer_ui = new OptimizerUI();
  }
  return _optimizer_ui;
}
const glass_ui = {
  name: "优化玻璃风格",
  init: false,
  intro: "开启后全局使用玻璃风格UI，可能会影响部分UI显示",
  onclick: (item) => getOptimizerUI().onclickGlass(item)
};
const increase_contrast_ui = {
  name: "高对比度模式",
  init: false,
  intro: "开启后提升UI对比度，使内容更易读",
  onclick: (item) => getOptimizerUI().onclickIncreaseContrast(item)
};
const dialog_ui = {
  name: "优化对话框",
  init: false,
  intro: "开启后对话框将使用优化样式，可能会影响部分对话框显示",
  onclick: (item) => getOptimizerUI().onclickDialog(item)
};
export {
  OptimizerUI,
  dialog_ui,
  getOptimizerUI,
  glass_ui,
  increase_contrast_ui
};
