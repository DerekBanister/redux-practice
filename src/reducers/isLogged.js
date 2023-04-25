const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            //  true
            return !state;
        default:
            //false
            return state;

    }
}

export default loggedReducer;