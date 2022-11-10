import React from "react";
import heart from '../images/heart.png'
import redHeart from '../images/redHeart.png'


const TuitStats = (
    {tuits}

) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-3 align-content-center padding-fat">
                    <i className="bi bi-chat"></i>
                   {tuits.replies}
                </div>
                <div className="col-3 align-content-center">
                    <i className="bi bi-arrow-repeat"></i>
                    {tuits.retuits}
                </div>

                <div className="col-3 align-content-center">
                    <img  src={ tuits.liked ? redHeart : heart
                    } alt="heart" width={tuits.liked ? 20 : 30}
                    />
                    {tuits.likes}


                </div>
                <div className="col-3 align-content-center">
                    <i className="bi bi-share"></i>
                </div>
            </div>
        </li>

    );
};
export default TuitStats;