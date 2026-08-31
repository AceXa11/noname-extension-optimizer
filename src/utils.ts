import { lib, game, ui, get, ai, _status } from "noname";


export function loadStyles(cssPath: string) {
    if (document.getElementById(`optimizer-${cssPath}`)) return;

    const link = document.createElement("link");
    link.id = `optimizer-${cssPath}`;
    link.rel = "stylesheet";
    link.href = `${lib.assetURL}extension/optimizer/style/${cssPath}.css`;
    document.head.appendChild(link);
    console.log(`optimizer ${cssPath} styles loaded.`);
}

export function removeStyles(cssPath: string) {
    const link = document.getElementById(`optimizer-${cssPath}`);
    if (!link) return;

    link.remove();
    console.log(`optimizer ${cssPath} styles removed.`);
}

// export function menuTabBarOptimizer(menu: HTMLElement) {
//     const menuTab = menu.querySelector(".menu-tab") as HTMLElement;
//     const menuTabBar = menu.querySelector(".menu-tab-bar") as HTMLElement;

//     if (!menuTab || !menuTabBar) return;

//     const updateTabBar = (tab: HTMLElement) => {
//         const tabRect = tab.getBoundingClientRect();
//         const tabContainerRect = menuTab.getBoundingClientRect();

//         // getBoundingClientRect 已经是实际 CSS 布局尺寸，
//         // 不需要再除以 menuZoom()
//         const offset = tabRect.left - tabContainerRect.left;

//         menuTabBar.style.transform = `translateX(${offset}px)`;
//     };

//     const originalClickMenuTab = ui.click.menuTab;

//     ui.click.menuTab = function (tab: string) {
//         originalClickMenuTab.call(this, tab);

//         const active = menuTab.querySelector(".active") as HTMLElement;
//         if (active) {
//             // 等浏览器完成布局后再计算
//             requestAnimationFrame(() => {
//                 updateTabBar(active);
//             });
//         }
//     };

//     // 保存下来，方便以后重新计算
//     (menu as any)._optimizerUpdateTabBar = () => {
//         const active = menuTab.querySelector(".active") as HTMLElement;
//         if (active) {
//             updateTabBar(active);
//         }
//     };

//     // 初始化
//     (menu as any)._optimizerUpdateTabBar();
// }