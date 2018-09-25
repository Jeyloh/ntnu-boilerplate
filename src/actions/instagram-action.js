export const FETCHING_INSTAGRAM = 'FETCHING_INSTAGRAM';
export const SET_INSTAGRAM = 'SET_INSTAGRAM';

const URL = 'https://us-east1-ntnu-217513.cloudfunctions.net/function-1';

export const fetchingInstagram = () => {
    return {
        type: FETCHING_INSTAGRAM,
        payload: {
            isDone: false
        }
    };
};

export const setInstagram = data => {
    return {
        type: SET_INSTAGRAM,
        payload: {
            isDone: true,
            data
        }
    };
};

export const fetchInstagram = () => {
    return dispatch => {
        dispatch(fetchingInstagram());
        fetch(URL, {})
            .then(res => res.json())
            .then(res => {
                dispatch(setInstagram(res));
            });
    };
};
