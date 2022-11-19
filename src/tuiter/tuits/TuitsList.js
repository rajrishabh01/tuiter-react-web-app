/* eslint-disable */
import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, [])
    return(
        <>
            <ul class="list-group">
                {
                    loading && 
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                
                {tuits.map(tuits => <TuitItem key={tuits._id} tuits={tuits} />)}
            </ul>
        </>
    )
};

export default TuitsList;