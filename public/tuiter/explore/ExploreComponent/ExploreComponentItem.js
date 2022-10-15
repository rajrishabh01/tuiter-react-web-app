const ExploreComponentItem = (tabs) => {
  return `
    <li class="nav-item">
    <a class="nav-link ${tabs.active ? tabs.active : ''} ${tabs.disappear ? `d-none d-sm-block` : ''}" href="#">${tabs.topic}</a>
</li>
    `;
};

export default ExploreComponentItem;
