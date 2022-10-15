/* eslint-env jquery */
import NavigationSidebarList from "../NavigationSidebar/NavigationSidebarList.js";
import WhoToFollowList from "../whotofollowList/WhoToFollowList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import ExploreComponent from "./ExploreComponent/ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(`
        <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   ${NavigationSidebarList()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${ExploreComponent()}
    ${PostSummaryList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${WhoToFollowList()}
   </div>
  </div>
    `);
}

$(exploreComponent);
