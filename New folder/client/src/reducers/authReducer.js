// import { json } from "react-router-dom";

const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      console.log("It's action", action);
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      // if data didn't exist it will not throw an error

      return { ...state, data: action?.data };

    default:
      return state;
    // break;
  }
};

export default authReducer;
