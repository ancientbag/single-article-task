import React from "react";
import Moment from 'react-moment';

import "./index.scss";

const ArticleBlock = props => {
 return(
   <div>
     <div className="article-title">
       {props.title}
     </div>
     <div className="article-date">
       <Moment format="DD/MM/YYYY">{props.date}</Moment>
     </div>
     <div className="article-description" dangerouslySetInnerHTML={{__html:props.description}} />
   </div>
 )
}

export default ArticleBlock;
