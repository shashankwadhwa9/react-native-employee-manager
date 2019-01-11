import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // make a new object, taking all the properties of the existing state object,
            // modify the email property
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };

        default:
            return state;
    }
};
