import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-list-item";
import who from "../who-to-follow-list/who.json"

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={who.id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;