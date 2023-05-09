

const currentUserReducer = (state=null, action) => {
    switch(action.type){

        case "CURRENT_USER_DATA":
        return action.payload
        default: 
        return state;
    }
}

export default currentUserReducer

// case "CURRENT_USER_DATA" is coming from action currentuser.js inside it we defined CURRENT_USER_DATA


// we are passing it inside useSelector so it can select data from here and data will be in the form of email, password, name, token etc.