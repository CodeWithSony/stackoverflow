import express from 'express'
import {AskQuestion, getAllQuestions} from '../controllers/Question.js'


// 
const router = express.Router();

router.post('/Ask', AskQuestion);
// this askQuestion is a function which we have to import from the controller.


// We will retrieve data from the database and access it to the backend and show it in the frontend home main bar
// so we will make get request to fetch data from the database
 router.get('/get', getAllQuestions);
// getAllquestions
export default router;