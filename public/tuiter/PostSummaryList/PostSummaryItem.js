/* eslint-env jquery */
import post from "./post.js";

const PostSummaryItem = (post) => {
  return `
    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9 align-items-center">
                                <div class="text-secondary">${post.topic}</div>

                                <div class="fw-bold">${
                                  post.userName ? post.userName : ""
                                }
                                ${
                                  post.userName
                                    ? `<i class="fas fa-user-check" style="font-size: 15px;"></i><span
                                class="text-secondary fw-lighter"> - ${post.time}</span>`
                                    : ""
                                }
                                    
                                </div>
                                <div class="fw-bold">${post.title}
                                </div>
                                <div class="text-secondary">
                                    ${post.tweets ? post.tweets : ""}
                                </div>
                            </div>
                            <div class="col-3">
                                <img class="float-end rounded" src="${
                                  post.image
                                }" width="70%">
                            </div>
                        </div>
                    </li>
    `;
};

export default PostSummaryItem;
