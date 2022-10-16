import posts from "./posts.js";

const PostItem = (posts) => {
  return `
    <li class="list-group-item bg-black mt-">
    <div class="row">
    <div class="wd-bookmark-main">
    <div class="wd-bookmark-profile-img-left">
    <img src="${posts.profile}">
</div>
<div class="wd-bookmark-main-right">
    <div class="wd-bookmark-author">
        <div id="wd-bookmark-author-left">
            <h1 class="fw-bold">${posts.userName}&nbsp;</h1>
            <i class="fas fa-user-check"></i>
            <h3>&nbsp;@${posts.handle} - ${posts.date}</h3>
        </div>
        <div id="wd-bookmark-author-right">
            <p class="fw-bold">...</p>
        </div>
    </div>
    <div class="wd-bookmark-right-desc">
        <h3>${posts.title}</h3>
    </div>
    <div class="wd-bookmark-img-title-desc">
        <div id="wd-bookmark-img">
            <img src="${posts.image}">
        </div>
        <div id="wd-bookmark-img-desc">
            <h1 class="fw-bold mb-2">${posts.imageDescription ? posts.imageDescription : ''}</h1>
            <h3>${posts.imageDetails ? posts.imageDetails : ''}</h3>
        </div>
    </div>
    <div class="wd-bookmark-symbols d-flex justify-content-between mb-2">
        <i class="fa fa-comment" style="font-size:15px;color:lightgray">${posts.comment}</i>
        <i class="fa fa-bell" style="font-size:15px;color:lightgray">${posts.tweets}</i>
        <i class="fa fa-heart" style="font-size:15px;">${posts.heart}</i>
        <i class="fa fa-share" style="font-size:15px;color:lightgray"></i>
    </div>
</div>
</div>
</div>
</li>
    `;
};

export default PostItem;
