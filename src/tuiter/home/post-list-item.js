import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "likes":"22",
            "retweets":"44",
            "comments":"87",
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="row">
                        <div className="fw-bolder col-2">{post.userName}</div>
                        <div className="col-5"> @{post.topic}. {post.time}</div></div>


                    <div>{post.title}</div>
                </div>

                    <img width={70}
                         src={`${post.image}`}/>

                </div>
                <div>
                    <div className="row">
                        <div className={"col-3"}>
                            <img src={"https://static.thenounproject.com/png/638755-200.png"} width={30}/>
                            {post.comments}
                        </div>

                        <div className={"col-3"}>
                            <img src={"https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"} width={23}/>
                             {post.likes}
                        </div>

                        <div className={"col-3"}>
                            <img src={"https://static.vecteezy.com/system/resources/previews/006/899/556/original/retweet-arrows-symbol-line-art-icon-vector.jpg"} width={37}/>
                             {post.retweets}
                        </div>

                        <div className={"col-3"}>
                            <img src={"https://cdn.icon-icons.com/icons2/2751/PNG/512/export_upload_icon_176175.png"} width={20}/>
                        </div>
                    </div>
                </div>

        </li>
    );
};
export default PostSummaryItem;