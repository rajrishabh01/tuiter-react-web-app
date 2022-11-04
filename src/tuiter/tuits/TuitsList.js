import React from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector((state) => state.tuits);
    return(
        <>
            <ul class="list-group">
                {tuitsArray.map(tuits => <TuitItem key={tuits._id} tuits={tuits} />)}
            </ul>
        </>
    )
};

export default TuitsList;