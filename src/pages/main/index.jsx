import React, { Component } from "react";
import "./index.scss";

import { connect } from "react-redux";

import ArticleBlock from "../../components/ArticleBlock";

import ResponseBlock from "../../components/ResponseBlock";

import Comments from "../../components/Comments";

const enhance = connect(
  ({comments}) => ({comments}),
  null
)

class Main extends Component {

  render(){
    return(
      <div className="article">
        <ArticleBlock
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          date="Fri, 03 May 2019 10:57:58 GMT"
          description={`<a href='http://google.com'>Lorem</a> ipsum dolor sit amet, consectetur`}/>
        {this.props.comments.length
          ? <>
            <h3>Комментарии:</h3>
            <Comments comments={this.props.comments} />
          </>
          : <h3>Нет комментариев</h3>}
        <ResponseBlock items={this.props.comments} title="Добавить комментарий" />
      </div>
    )
  }
}



export default enhance(Main);
