import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // make a new object, taking all the properties of the existing state object,
            // modify the email property
            return { ...state, email: action.payload };

        default:
            return state;
    }
};
