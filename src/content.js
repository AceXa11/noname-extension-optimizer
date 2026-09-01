import { getMenu } from "./menu.js";
async function content(config) {
  getMenu().applyFromConfig();
}
export {
  content
};
