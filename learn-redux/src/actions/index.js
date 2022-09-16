export const increment = (nbr) => {
    return {
        type: 'INCREMENT',
        payload: nbr
    };
};

export const decrement = (nbr) => {
    return {
        type: 'DECREMENT',
        payload: nbr
    };
};