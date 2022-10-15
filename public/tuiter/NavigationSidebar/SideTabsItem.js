const SideTabsItem = (sidetabs) => {
  return `

  <li class="list-group-item bg-black text-white">
                        <div class="row">
                            <div class="col-2"> <i class="${sidetabs.pic}"></i>
                            </div>
                            <div class="col-10 d-none d-xl-block">
                            ${sidetabs.name}
                            </div>
                            
                        </div>
                    </li>
  
        `;
};

export default SideTabsItem;
