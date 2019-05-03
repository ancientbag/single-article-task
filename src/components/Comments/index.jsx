import React, { Fragment } from "react";
import "./index.scss";

import ResponseBlock from "../ResponseBlock/index";

import { connect } from "react-redux";

import Moment from 'react-moment';
import 'moment/locale/ru';

import { changeRating, hideComment, selectComment } from "../../redux/actions/comments"

const enhance = connect(
  null,
  ({changeRating,hideComment,selectComment})
)

class CommentsWrapper extends React.Component {

  answerComment(item){
    this.props.selectComment(item);
  }

  render(){

    const Comments = enhance(CommentsWrapper);

    const RatingSwitcher = ({rating, onDecrease, onIncrease}) => {
      return(
        <div className="rating-switcher">
          <button style={{borderRadius:"7px 0 0 7px"}} onClick={onIncrease ? onIncrease : null}>+</button>
          <div className="rate">{rating}</div>
          <button style={{borderRadius:"0 7px 7px 0"}} onClick={onDecrease ? onDecrease : null}>-</button>
        </div>
      )
    }

    return(
      this.props.comments.map(item=>{
        return(
          <Fragment key={item.id}>
            {!item.hidden
            ? <div className="comment-block" style={{marginLeft:this.props.level ? this.props.level*50+"px" : 0}}>
                <img alt="No avatar" className="comment-avatar" src="https://i.imgur.com/5TqyCr2.png" />
                <div className="comment-content">
                  <div className="comment-user">
                    <span>{item.name}</span>
                    <div className="comment-ago">
                      <Moment locale="ru" fromNow>{new Date(item.date).toUTCString()}</Moment>
                    </div>
                    <RatingSwitcher onDecrease={()=>{this.props.changeRating(item,-1)}}
                                    onIncrease={()=>{this.props.changeRating(item,1)}}
                                    rating={item.rating} />
                    <div onClick={()=>{this.answerComment(item)}} className="comment-reply">Ответить</div>
                  </div>
                  <div className="comment-message">
                    {item.text}
                  </div>
                  <div onClick={()=>{this.props.hideComment(item)}} className="comment-hide">
                    Свернуть
                  </div>
                </div>
              </div>
            : <div className="expandComment" onClick={()=>{this.props.hideComment(item)}} style={{marginLeft:this.props.level*50+"px"}}>
              <p>Открыть комментарий</p>
            </div>}
            {item.selected && !item.hidden &&
              <div style={{marginLeft:this.props.level ? this.props.level * 50 + "px" : 0}}>
                <ResponseBlock target={item} items={this.props.level === 2 ? this.props.comments : item.children} title="Ответить" />
              </div>
            }
            {item.children.length > 0 && !item.hidden
              && <Comments level={this.props.level ? this.props.level + 1 : 1} comments={item.children} /> }
          </Fragment>
        )
      })
    )
  }
}

export default enhance(CommentsWrapper);
