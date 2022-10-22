import React from "react";
import postsSumArray from "./big-posts.json";
import PostItem from "./post-list-item";

const PostList = () => {
    return (
        <ul class="list-group">
            {postsSumArray.map(posts => <PostItem key={posts._id} posts={posts} />)}
        </ul>
    );
};

export default PostList;
