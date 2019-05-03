import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment }  from "../../redux/actions/comments";

import "./index.scss";


const enhance = connect(
  null,
  ({addComment})
)

class ResponseBlock extends Component{

  state = {
    name:'',
    email:'',
    text:''
  }

  requestAddComment = this.requestAddComment.bind(this);

  genID(){
    return Math.random().toString(36).substr(2, 10);
  }

  requestAddComment(e){
    e.preventDefault();
    // if all fields passed validation
    let isValid = this.validate();
    if(!isValid.length){
      let comment = {
        rating:0,
        children:[],
        date:new Date().toUTCString(),
        id:this.genID(),
        hidden:false,
        selected:false
      }
      Object.assign(comment,this.state);
      this.props.addComment(comment,this.props.target,this.props.items)
      this.setState({name:'', email:'', text:''})
    } else {
      let errorLog = isValid.join("\n");
      alert(errorLog);
    }
  }

  validate(){
    let errors = [];
    // empty fields
    if(!this.state.name.trim().length > 0 || !this.state.email.trim().length > 0 || !this.state.text.trim().length > 0){
      errors.push("Не должно быть пустых полей")
    }
    // email is correct
    let emailPatt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!emailPatt.test(this.state.email)){
      errors.push("Не верный email")
    }
    return errors;
  }


  render(){
    return(
      <form className="response-block">
        <div className="response-label">{this.props.title}</div>
        <div className="response-row">
          <p className="response-field">Имя:</p>
          <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} className="response-input" type="text" />
        </div>
        <div className="response-row">
          <p className="response-field">E-mail:</p>
          <input value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} className="response-input" type="text" />
        </div>
        <div className="response-row">
          <p className="response-field">Текст комментария:</p>
          <textarea value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}} className="response-message"></textarea>
        </div>
        <div className="response-row">
          <p className="response-field" />
          <button onClick={this.requestAddComment} className="response-btn">
            Добавить комментарий
          </button>
        </div>
      </form>
    )
  }
}

export default enhance(ResponseBlock);
