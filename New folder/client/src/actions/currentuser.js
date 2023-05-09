export const setCurrentUser = (data) => {
    return {
        type: "CURRENT_USER_DATA",
        payload: data,
    };
};



// we will pass this data to the reducer and reducer will send data to the redux store and store will collect it.
