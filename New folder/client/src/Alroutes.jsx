import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";

import DisplayQuestions from "./pages/Questions/DisplayQuestions";
import AskQuestions from "./pages/Askquestions/AskQuestions";


const Alroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/Auth" element={<Auth />} />
      <Route exact path="/Questions" element={<Questions />} />
      {/* <Route exact path="/AskQuestions" element={<AskQuestions />} /> */}
      {/* <Route exact path="/AskQuesions" element={<AskQuesions/>}/> */}
      <Route exact path="/Askquestions" element={<AskQuestions />}></Route>
      <Route exact path="/Questions/:id" element={<DisplayQuestions />} />
    </Routes>
  );
};

export default Alroutes;
