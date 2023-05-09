// import React from 'react'
import * as api from "../api"

// we have imported it inside pages askQuestion.jsx

// we will use the askQuestion data
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  // because we are using thunk we have to use dispatch aslo

  try {
    // and willl send to the backend and retrieve it as response and push it to the redux
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    // here pushing
    // here is the data which we are passing to the backend
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// export default askQuestion

// we are sending this action to the reducer in question.js as their cases matches
