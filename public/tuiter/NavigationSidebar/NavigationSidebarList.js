import SideTabsItem from "./SideTabsItem.js";
import sidetabs from "./sidetabs.js";

const NavigationSidebarList = (active) => {
  return `
    <ul class="list-group mx-2">
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-tenge"></i>
     </a>
    
    ${sidetabs
      .map((sides) => {
        return SideTabsItem(sides, active);
      })
      .join("")}
    </ul>
    
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `;
};

export default NavigationSidebarList;
