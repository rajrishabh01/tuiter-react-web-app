/* eslint-env jquery */
import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
    <ul class=" list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col fw-bold">Who to Follow
                            </div>
                        </div>
                    </li>
                    ${who.map(whos=> {
                        return WhoToFollowListItem(whos);
                    }).join('')}
                    </ul>
`;
};

export default WhoToFollowList;
