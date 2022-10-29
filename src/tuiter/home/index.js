import React from "react";
import PostList from "./post-list.js";
import PostSummaryList from "./post-list.js";


const HomeComponent = () => {
    return (
        <div>
            <h1>Tuiter Home</h1>
            <PostSummaryList/>
        </div>
    );
}

export default HomeComponent