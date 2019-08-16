import { Map } from "immutable";

import {
    GET_USERS_START,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from "./actions";

const initialState = Map({
    loading: false,
    error: null,
    data: null,
});

const actionsMap = {
    [GET_USERS_START]: state => {
        return state.merge(
            Map({
                loading: true,
                error: null,
            }),
        );
    },
    [GET_USERS_ERROR]: (state, action) => {
        return state.merge(
            Map({
                loading: false,
                error: action.error.message,
            }),
        );
    },
    [GET_USERS_SUCCESS]: (state, action) => {
        return state.merge(
            Map({
                loading: false,
                error: null,
                data: action.data,
            }),
        );
    },
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
