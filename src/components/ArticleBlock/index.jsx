import React from "react";

import "./index.scss";

const ArticleBlock = props => {
 return(
   <div>
     <div className="article-title">
       {props.title}
     </div>
     <div className="article-date">
       {props.date}
     </div>
     <div className="article-description" dangerouslySetInnerHTML={{__html:props.description}} />
   </div>
 )
}

export default ArticleBlock;
