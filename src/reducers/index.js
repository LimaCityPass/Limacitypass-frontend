import {LOGIN_USER, LOGOUT_USER} from "../actions/types";

const initialState = {authenticated: false, user: {name: '', email: ''}, error: ''};

export default function (state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, error: '', authenticated: true, user: action.payload };
        case LOGOUT_USER:
            return { ...state, authenticated: false };
    }

    return state;
}