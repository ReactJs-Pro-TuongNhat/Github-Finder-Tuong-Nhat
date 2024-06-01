import { SET_KEY, SET_USERS } from './constants';
const initialState = {
    users: [],
    text: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_KEY:
            return {
                ...state,
                text: action.payload,
            };
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return 'Invalid action';
    }
}

export { initialState };
export default reducer;