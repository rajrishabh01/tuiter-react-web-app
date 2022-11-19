import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuits }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item pt-3 wd-post-list-item">
            <div className="row">
                <div className="col-1 me-3">
                    <img src={`/images/${tuits.image}`}
                        width="50px" height="50px"
                        className="rounded-circle" alt="text" />
                </div>

                <div className="col me-2">
                    <div className="wd-posts-header">
                        <a href="#top"
                            className="list-group-item-action
                       fw-bold
                       text-decoration-none">
                            {tuits.userName}&nbsp;
                        </a>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="text-secondary"> {tuits.handle}</span>
                        <span className="text-secondary"> . {tuits.time}</span>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuits._id)}></i>
                        <br />
                        <p>
                            {tuits.tuit}
                        </p>
                    </div>
                    <TuitStats key={tuits._id} tuits={tuits}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
