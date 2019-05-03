import React, { Component } from "react";
import "./index.scss";

import ArticleBlock from "../../components/ArticleBlock";

class Main extends Component {

  render(){
    return(
      <div className="article">
        <ArticleBlock
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          date="21.04 1990"
          description={`<a href='http://google.com'>Lorem</a> ipsum dolor sit amet, consectetur`}/>
      </div>
    )
  }
}



export default Main;
