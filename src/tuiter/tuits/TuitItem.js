import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({ tuits }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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
                    <div className="row mt-3">
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-regular fa-comment me-2"></i>
                                <span>{tuits.replies}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-solid fa-retweet me-2"></i>
                                <span>{tuits.retuits}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary" href="#top">
                                <i className="fa-solid fa-heart me-2" style={{ color: 'red' }}></i>
                                <span>{tuits.likes}</span>
                            </a>
                        </div>
                        <div className="col me-1">
                            <a className="text-decoration-none text-secondary ps-2" href="#top">
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
