import { lib, game, ui, get, ai, _status } from "noname";
import * as utils from "./utils";

export class Menu {
    private optionName = "menu_center";

    onclick(item: any) {
        game.saveExtensionConfig("optimizer", this.optionName, item);
        if (item) {
            utils.loadStyles(this.optionName);
        } else {
            utils.removeStyles(this.optionName);
        }
    }

    applyFromConfig() {
         this.onclick(game.getExtensionConfig("optimizer", this.optionName));
    }
}

let _menu: Menu | null = null;
export function getMenu() {
    if (!_menu) {
        _menu = new Menu();
    }
    return _menu;
}

export const menu_center = {
    name: "菜单中心显示",
    init: false,
    intro: "开启后菜单将会在屏幕中心显示",
    onclick: (item: any) => {
        getMenu().onclick(item);
    },
};