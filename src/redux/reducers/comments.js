import { ADD_COMMENT, SELECT_COMMENT, CHANGE_RATING, HIDE_COMMENT } from '../actions/comments';

const initialState = [];


export default (state = initialState, action) =>{
  switch(action.type){
    case ADD_COMMENT:
      if(action.payload.target) action.payload.target.selected = false;
      action.payload.items.push(action.payload.obj);
      return [...state]
    case SELECT_COMMENT:
      action.payload.selected = !action.payload.selected
      return [...state];
    case CHANGE_RATING:
      action.payload.item.rating += action.payload.offset;
      action.payload.item.rating <= -10 ? action.payload.item.hidden = true : action.payload.item.hidden = false ;
      return [...state]
    case HIDE_COMMENT:
      action.payload.item.hidden = !action.payload.item.hidden;
      return [...state];
    default:
      return state;
  }
}
