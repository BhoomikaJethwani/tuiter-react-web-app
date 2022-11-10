import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuits-stats.js";
import tuit from '../tuits/tuits.json'
import {deleteTuit} from "./tuits-reducer";
import "bootstrap-icons/font/bootstrap-icons.css";


const TuitItem = ({tuits}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item border-dark">
            <div className="row">
                <div className="col-2">
                    <img width={60} className=" rounded-5 " src={`${tuits.image}`} alt=""/>

                </div>

                <div className="col-9">
                    <div className="fw-bolder">{tuits.topic}. {tuits.handle}. {tuits.time}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/></div>
                    <div>{tuits.tuit}</div>
                    <TuitStats tuits={tuits}/>
                </div>

            </div>
            <hr/>
        </li>
    );
};
export default TuitItem;