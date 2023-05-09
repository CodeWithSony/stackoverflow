import axios from 'axios';
// What is Axios? (A little bit of history) Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
const API = axios.create({baseURL: "http://localhost:5000"});


export const logIn =  (authData) => API.post('user/logIn', authData)
export const signUp =  (authData) => API.post('user/signUp', authData)



export const postQuestion = (questionData) => 
    API.post('/questions/Ask', questionData)
