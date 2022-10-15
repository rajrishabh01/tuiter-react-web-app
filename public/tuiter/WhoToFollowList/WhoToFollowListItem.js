
const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item ps-3 pe-4 pt-2 pb-1">
                        <div class="row">
                            <div class="col-2">
                                <img class="rounded-circle" src="${who.avatarIcon}" width="48px" height="48px">
                            </div>
                            <div class="col-7 ps-4">
                                <div class="fw-bold">${who.userName}
                                    <i class="fas fa-check"></i>
                                </div>
                                <div>@ ${who.handle}</div>
                            </div>
                            <div class="col-3 btn btn-primary rounded-pill mt-2 mb-2 pb-1">Follow</div>

                        </div>
                    </li>
    `)
}

export default WhoToFollowListItem;