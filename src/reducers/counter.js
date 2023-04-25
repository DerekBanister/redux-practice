const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        //ran into a err when I received (key "counter" returned undefined during init)
        //fix is to add a default 
        default:
            return state;
    }
}

export default counterReducer;

// 29 34