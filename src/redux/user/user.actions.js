export const setCurrentUser = user => {
    console.log('USER', user);
    return { type: 'SET_CURRENT_USER',
    payload: user }
};