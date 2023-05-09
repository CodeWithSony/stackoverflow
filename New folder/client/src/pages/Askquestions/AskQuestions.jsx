import React, { useState } from "react";
// useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

// what set function in js
// The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AskQuestions.css";
// import "../../actions/question";
import { askQuestion } from "../../actions/question";

// we seen suggetion here to not type .js in the last of question

const AskQuestions = () => {
  const [questionTitle, setQuestionTitle] = useState("");

  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  // we are getting the data from above and passing the data to the dispatch
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  console.log(User, "It's user variable...");

  // console.log(User, "ony User variable")
  // console.log(User, "its also a userrrrr...");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // we defined it inside form
    e.preventDefault();
    console.log(
      { questionTitle, questionBody, questionTags },
      "hello this are bodies...."
    );

    if (User) {
  console.log(User, "It's user inside handle submit function....");

      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name
              // userPosted,
            },
            navigate
          )
        );
      }
    }
    // we are passing it to the action's index.js

    // navigate for home page going
    // i think User inside models
    // in dispatch we have to write some function
  };

  // const handleEnter = (e) => {
  //   if (e.key === "Enter") {
  //     setQuestionBody(questionBody + "\n");
  //     // \n for new line
  //   }
  //   console.log();
  // };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        {/* we will use it later */}
        {/* <h1>{questionBody} </h1> */}
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific, and imagin you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g Is There R  functions to find the index in a vector"
              />
            </label>

            <label htmlFor="ask-body-title">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                questions.
              </p>
              {/* <textarea type="textarea" id=""/>

        <textarea/> */}

              <textarea
                name="ask-ques-title"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                // onKeyPress={handleEnter}
              ></textarea>
            </label>

            <label htmlFor="ask-ques-title">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g xml, typescript, wordpress"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="review-btn"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default AskQuestions;
