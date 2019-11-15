const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case '' :
            return {
                currentUser: action.payload,
                ...state
            }
        default:
            return state
    }
}

export default userReducer;
