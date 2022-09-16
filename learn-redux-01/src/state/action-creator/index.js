export const depositMony = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'diposit',
            payload: amount,
        })
    }
}

export const withdrawMony = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount,
        })
    }
}