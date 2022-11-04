import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
   
 return (
   <div className="list-group">
     <a href="#top" className="list-group-item">Tuiter</a>
     <Link to="/tuiter/" className={`list-group-item ${active === ''?'active':''}`}>
     <i class="col-1 fa fa-home align-self-center"></i>
     <span className="ms-2">&nbsp;Home</span>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
     <i class="col-1 fa fa-hashtag align-self-center"></i>
     <span className="ms-2">&nbsp;Explore</span>
     </Link>
     <Link to="/" className="list-group-item">
     <i class="col-1 fa fa-home align-self-center"></i>
     <span className="ms-2">&nbsp;Labs</span>
     </Link>
     <a href="#top" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i class="col-1 fa fa-bell align-self-center"></i>
     <span className="ms-2">&nbsp;Notifications</span>
     </a>
     <a href="#top" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <i class="col-1 fas fa-comments align-self-center"></i>
     <span className="ms-2">&nbsp;Messages</span>
     </a>
     <a href="#top" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i class="col-1 fa fa-hashtag align-self-center"></i>
     <span className="ms-2">&nbsp;Bookmarks</span>
     </a>
     <a href="#top" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <i class="col-1 fa fa-users align-self-center"></i>
     <span className="ms-2">&nbsp;Lists</span>
     </a>
     <a href="#top" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i class="col-1 fa fa-share align-self-center"></i>
     <span className="ms-2">&nbsp;Profile</span>
     </a>
     <a href="#top" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       <i class="col-1 fa fa-hashtag align-self-center"></i>
     <span className="ms-2">&nbsp;More</span>
     </a>
   </div>
 );
};
export default NavigationSidebar;