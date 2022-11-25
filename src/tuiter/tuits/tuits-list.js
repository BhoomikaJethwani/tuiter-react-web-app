import React, {useEffect}  from "react";
import TuitItem
    from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(
            <>
                {loading &&
                <li> Loading...
                    </li>
                }
                {
                    tuits.map(tuit => {
                        return(
                            <TuitItem tuits={tuit} key={tuit._id}/>
                        );
                    })
                }
            </>
    );
};
export default TuitsList;