/* eslint-env jquery */
import sidetabs from "./sidetabs.js";

const SideTabsItem = (sidetabs, active) => {
    let activeOrNot = active === sidetabs.name ? "active" : "";

    return `
  <a href="${sidetabs.link}"
                   class="list-group-item list-group-item-action ${activeOrNot}">
                    <div class="row">
                        <i class="col-1 ${sidetabs.pic} align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            ${sidetabs.name}
                        </span>
                    </div>
                </a>
  
        `;
};

export default SideTabsItem;