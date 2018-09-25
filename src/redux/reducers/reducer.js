import { combineReducers } from 'redux';
import { FETCHING_INSTAGRAM, SET_INSTAGRAM } from '../actions/instagram-action';
import { SET_USER, REMOVE_USER } from '../actions/user-action';

const instagramReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCHING_INSTAGRAM:
            return { ...state, ...action.payload };
        case SET_INSTAGRAM:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state,
              user: action.payload.user
            };
        case REMOVE_USER:
            return { ...state,
              user: action.payload.user
            };
        default:
            return state;
    }
};

export default combineReducers({ instagramReducer, userReducer });
