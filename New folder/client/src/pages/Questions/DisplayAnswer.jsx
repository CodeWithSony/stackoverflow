import React from "react";
// import QuestionsDetails from "./QuestionsDetails";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer?.map((ans) => (
        // <div className="display-ans" key={ans._id}>
        <div className="question-actions-user" key={ans._id}>
          <div>

          <p>
            {ans.answerBody}
          </p>

            <div className="display-anss">
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
          </div>
            <div>
              <p>Answered on {ans.answerOn} </p>
              <Link
                to={`User/${question.userId}`}
                className="user-link"
                style={{ color: "#00086d8" }}
              >
                <Avatar backgroundColor="green" px="8px" py="8px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>

                <div>{question.userPosted}</div>
              </Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
 