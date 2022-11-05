import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faOutlinedHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet } from '@fortawesome/free-solid-svg-icons'

const TuitStats = ({ tuits }) => {
    return (
        <div className="row pt-2 pb-2">
            <div className="wd-interaction-comment col-3 align-content-center text-secondary">
                <FontAwesomeIcon icon={faComment} className="pe-2 text-decoration-none text-secondary fa-1x" />
                {tuits.replies}
            </div>
            <div className="col-3 align-content-center text-secondary">
                <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x" />
                {tuits.retuits}
            </div>
            <div className="col-3 text-decoration-none text-secondary">
                {tuits.liked && <FontAwesomeIcon icon={faSolidHeart} className="pe-2 text-danger fa-1x" />}
                {!tuits.liked && <FontAwesomeIcon icon={faOutlinedHeart} className="pe-2 text-secondary fa-1x" />}
                {tuits.likes}
            </div>
            <div className="col-3 text-decoration-none">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
        </div>
    )
}

export default TuitStats;