import { lib } from "noname";
function loadStyles(cssPath) {
  if (document.getElementById(`optimizer-${cssPath}`)) return;
  const link = document.createElement("link");
  link.id = `optimizer-${cssPath}`;
  link.rel = "stylesheet";
  link.href = `${lib.assetURL}extension/optimizer/style/${cssPath}.css`;
  document.head.appendChild(link);
  console.log(`optimizer ${cssPath} styles loaded.`);
}
function removeStyles(cssPath) {
  const link = document.getElementById(`optimizer-${cssPath}`);
  if (!link) return;
  link.remove();
  console.log(`optimizer ${cssPath} styles removed.`);
}
export {
  loadStyles,
  removeStyles
};
