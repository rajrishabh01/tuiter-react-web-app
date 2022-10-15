import SideTabsItem from "./SideTabsItem.js";
import sidetabs from "./sidetabs.js";

const NavigationSidebarList = () => {
  return `
    <ul class="list-group">
    <li class="list-group-item bg-black text-white">
    <div class="row">
        <div class="col-2"><i class="fas fa-tenge"></i></div>
        <div class="col-10"></div>
    </div>
</li>
    ${sidetabs
      .map(sides => {
        return SideTabsItem(sides);
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
