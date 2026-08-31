import { lib, game, ui, get, ai, _status } from "noname";
import * as utils from "./utils";

export class OptimizerUI {
    private optionNameGlass = "glass_ui";
    private optionNameIncreaseContrast = "increase_contrast_ui";
    private optionNameDialog = "dialog_ui";
    private _updateBak = null; 
    onclickGlass(item: any) {
        game.saveExtensionConfig("Optimizer", this.optionNameGlass, item);
        if (item) {
            utils.loadStyles(this.optionNameGlass);
        } else {
            utils.removeStyles(this.optionNameGlass);
        }
    }
    onclickIncreaseContrast(item: any) {
        game.saveExtensionConfig("Optimizer", this.optionNameIncreaseContrast, item);
        if (item) {
            utils.loadStyles(this.optionNameIncreaseContrast);
        } else {
            utils.removeStyles(this.optionNameIncreaseContrast);
        }
    }
    onclickDialog(item: any) {
        game.saveExtensionConfig("Optimizer", this.optionNameDialog, item);
        if (item) {
            if (ui) {
                this._updateBak = ui.update;
                ui.update = update;
            }
            utils.loadStyles(this.optionNameDialog);
        } else {
            if (ui && this._updateBak) {
                ui.update = this._updateBak;
                this._updateBak = null;
            }
            utils.removeStyles(this.optionNameDialog);
        }
    }
    constructor() {
        this.onclickGlass(game.getExtensionConfig("Optimizer", this.optionNameGlass));
        this.onclickIncreaseContrast(game.getExtensionConfig("Optimizer", this.optionNameIncreaseContrast));
        this.onclickDialog(game.getExtensionConfig("Optimizer", this.optionNameDialog));
    }

}
export const optimizer_ui = new OptimizerUI();
let _optimizer_ui: OptimizerUI | null = null;
export function getOptimizerUI() {
    if (!_optimizer_ui) {
        _optimizer_ui = new OptimizerUI();
    }
    return _optimizer_ui;
}

export const glass_ui = {
    name: "优化玻璃风格",
    init: false,
    intro: "开启后全局使用玻璃风格UI，可能会影响部分UI显示",
    onclick: (item) => getOptimizerUI().onclickGlass(item)
};

export const increase_contrast_ui = {
    name: "高对比度模式",
    init: false,
    intro: "开启后提升UI对比度，使内容更易读",
    onclick: (item) => getOptimizerUI().onclickIncreaseContrast(item)
};

export const dialog_ui = {
    name: "优化对话框",
    init: false,
    intro: "开启后对话框将使用优化样式，可能会影响部分对话框显示",
    onclick: (item) => getOptimizerUI().onclickDialog(item)
};


function update() {
    if (ui.updates && ui.updates.length) {
        for (var i = 0; i < ui.updates.length; i++) {
            ui.updates[i]();
        }
    }
    if (ui.dialog && !ui.dialog.classList.contains("noupdate")) {
        var hasButtons = ui.dialog.buttons && ui.dialog.buttons.length;

        if (!hasButtons && !ui.dialog.forcebutton && !ui.dialog.classList.contains("addNewRow")) {
            ui.dialog.classList.add("nobutton");
        } else if (!ui.dialog.classList.contains("addNewRow")) {
            ui.dialog.classList.remove("nobutton");
        }
        ui.dialog.classList.add("scroll1", "scroll2");
    }
}