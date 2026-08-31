import { lib, game, ui, get, ai, _status } from "noname";
import { getMenu } from "./menu";

export async function content(config) {
    
    getMenu().applyFromConfig();
}
