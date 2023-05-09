import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainBar.css";
// import Questions from "./Questions";
// import '../../App.css'
import QuestionList from "./QuestionList";

const HomeMainBar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
 
  // Abuout useLocation
  // This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.

  // import * as React from 'react';
  // import { useLocation } from 'react-router-dom';
  
  // function App() {
  //   let location = useLocation();
  
  //   React.useEffect(() => {
  //     // Google Analytics
  //     ga('send', 'pageview');
  //   }, [location]);
  
  //   return (
  //     // ...
  //   );
  // }

 
// About useNavigate()
// useNavigate is a React hook that allows you to programmatically navigate between different routes in a React application. It is used to provide a declarative way to navigate between routes, which makes it easier to maintain and update the application. It also allows for more flexibility when creating complex navigation flows.

// The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect:

// import { useNavigate } from "react-router-dom";

// function useLogoutTimer() {
//   const userIsInactive = useFakeInactiveUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userIsInactive) {
//       fake.logout();
//       navigate("/session-timed-out");
//     }
//   }, [userIsInactive]);
// }



  var questionList = [
    {
      _id: 1,
      votes: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Java", "node.js", "react.js", "mongoDB"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswered: "kumar",
        answerOn: "jan 2",
        userId: 1,
      }]

    },
    {
      _id: 2,
      votes: 0,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 8,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Javascript", "R", "Python", "mongoDB"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answered",
        userAnswered: "kumar",
        answerOn: "jan 2",
        userId: 2,
      }]
    },
    {
      _id: 3,
      votes: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Javascript", "R", "Python", "mongoDB"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [{
        answerBody: "Answered",
        userAnswered: "kumar",
        userAnsweredOn: "jan 2",
        userId: 2,
      }]
    },
  ];

  
const checkAuth = () => {
    if(user === null){
      alert("Login or Signup fo ask a question...");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestions');
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>

      <div>
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionList={questionList} />
          </>
        )}
    </div>
    </div>
  );
};

export default HomeMainBar
