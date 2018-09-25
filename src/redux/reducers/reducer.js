import { combineReducers } from 'redux';
import { FETCHING_INSTAGRAM, SET_INSTAGRAM } from '../actions/instagram-action';

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

export default combineReducers({ instagramReducer });
