import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const PostItem = ({ posts }) => {
    return (
        <li className="list-group-item pt-3 wd-post-list-item">
            <div className="row">
                <div className="col-1 me-3">
                    <img src={`/images/${posts.profile}`}
                        width="50px" height="50px"
                        className="rounded-circle" alt="text"/>
                </div>
                <div className="col me-2">
                    <div className="wd-posts-header">
                        <a href="#top"
                            className="list-group-item-action
                       fw-bold
                       text-decoration-none">
                            {posts.userName}
                        </a>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="text-secondary"> @{posts.handle}</span>
                        <span className="text-secondary"> . {posts.date}</span>
                        <br />
                        <p>
                            {posts.title}
                        </p>
                    </div>
                    <div className="row">
                        <div className="card wd-post-card ps-0 pe-0">
                            <img className="card-img-top
                        {posts.imageDescription ?
                        'rounded-top-4' : 'rounded-4'}"
                                src={`/images/${posts.image}`} alt="Post" />
                            <div className="card-body
                        {posts.image_title && posts.image_description ? 
                          '' : 'd-none'}">
                                <h6 className="card-title
                            {post.image_title ? '' : 'd-none'}">
                                    {posts.imageDescription}
                                </h6>
                                <div className="card-text text-secondary
                            {post.image_description ? '' : 'd-none'}">
                                    {posts.imageDetails}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-regular fa-comment me-2"></i>
                                <span>{posts.comment}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-solid fa-retweet me-2"></i>
                                <span>{posts.tweets}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-regular fa-heart me-2"></i>
                                <span>{posts.heart}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary ps-2" href="#top">
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostItem;
