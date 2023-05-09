import React from 'react'

//we will copy it's name and put it inside reducers index.js
const QuestionReducer = (state = {data: null}, action) => {
 switch (action.type){

    case"POST_QUESTION":
    return {...state, data: action.payload}
    default:
       return state
 }
}

export default QuestionReducer
// and in question reducer it will be stored
// and now we can access it through the app