import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({tuits}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuits) => {
        dispatch(updateTuitThunk({
            ...tuits,
            likes: tuits.likes + 1,
            liked: true
        }));
    }
    const unlikeTuitHandler = (tuits) => {
        dispatch(updateTuitThunk({
            ...tuits,
            likes: tuits.likes - 1,
            liked: false
        }));
    }

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
                    { tuits.liked && <i onClick={() => unlikeTuitHandler(tuits) } className="bi bi-heart-fill me-2 text-danger"></i>}
                    { !tuits.liked && <i onClick={() => likeTuitHandler(tuits) } className="bi bi-heart"></i>}
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