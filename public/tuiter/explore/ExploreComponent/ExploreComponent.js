import ExploreComponentItem from "./ExploreComponentItem.js";
import tabs from "./tabs.js";

const ExploreComponent = () => {
  return `
    <div class="row">
    <div class="col-11 position-relative">
        <i class="fas fa-search position-absolute ms-2 mt-2"></i>
        <input placeholder="Search Tuiter" class="w-100 rounded-pill ps-5 wd-pill"></input>
    </div>
    <div class="col-1">
        <i class="fa fa-cog float-end mt-1" style="font-size: 24px; color:rgb(12,159,233)"></i>
    </div>
</div>
<ul class="nav nav-tabs mt-2 mb-1 justify-content-start" style="border-bottom: solid 1px lightgray;">
    ${tabs
      .map((tab) => {
        return ExploreComponentItem(tab);
      })
      .join("")}

</ul>
<div class="position-relative">
    <img src="../../images/bannerpurple.jpeg" width="100%" class="mt-1" />
    <h1 class="position-absolute bottom-0 left=0 ms-2" style="color: white;">Birdland Items</h1>
</div>
    `;
};
export default ExploreComponent;
