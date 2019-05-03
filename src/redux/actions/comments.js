export const SELECT_COMMENT = "SELECT_COMMENT";
export const CHANGE_RATING = "CHANGE_RATING";
export const HIDE_COMMENT = "HIDE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export function addComment(obj, target, items){
  return {
    type:ADD_COMMENT,
    payload:({obj,target,items})
  }
}

export function selectComment(obj){
  return {
    type:SELECT_COMMENT,
    payload:obj
  }
}

export function changeRating(obj,rating){
  return {
    type:CHANGE_RATING,
    payload:{
      item:obj,offset:rating
    }
  }
}

export function hideComment(obj){
  return {
    type:HIDE_COMMENT,
    payload:{
      item:obj
    }
  }
}
