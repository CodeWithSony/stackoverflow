import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestions = () => {
  return (
    <div className="home-container-1">
    <LeftSidebar/>

    <div className="home-container-2">

   <QuestionsDetails />
   <RightSideBar />
    </div>
  </div>
  )
}

export default DisplayQuestions
