import React from "react";
import { useParams, Link } from "react-router-dom";
import upvotes from "../../assets/sort-up.svg";
import downvotes from "../../assets/sort-down.svg";
import Question from "./Question.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

const QuestionsDetails = () => {
  const { id } = useParams();

  // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

  console.log(id);

  var questionList = [
    {
      _id: "1",
      // votes: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 1,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Java", "node.js", "react.js", "mongoDB"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerOn: "jan 2",
          userId: 1,
        },
      ],
    },
    {
      _id: "2",
      // votes: 0,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 8,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Javascript", "R", "Python", "mongoDB"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: "3",
      // votes: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function",
      questionBody: "It mean to be",
      questionTags: ["Javascript", "R", "Python", "mongoDB"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === id)
            .map((question) => (
              // questionList.map(question => (

              <div key={question._id}>
                {/* {console.log(question._id)} */}
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvotes}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={downvotes}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>

                        <div>
                          <p>asked on {question.askedOn} </p>
                          <Link
                            to={`User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#00086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="8px"
                              border-borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>

                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      value="Post Your Answer"
                      className="post-ans-btn"
                    />
                  </form>
                  <p>
                    Browse other question tages
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
