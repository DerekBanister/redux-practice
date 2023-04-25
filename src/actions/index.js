export const increment = (number) => {
    //using payload to increment by 5, takes argument when called in App.js
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}