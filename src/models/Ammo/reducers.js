import { Map } from "immutable";

import {
    GET_AMMO_START,
    GET_AMMO_ERROR,
    GET_AMMO_SUCCESS
} from "./actions";

const initialState = Map({
    loading: false,
    error: null,
    data: null,
});

const actionsMap = {
    [GET_AMMO_START]: state => {
        return state.merge(
            Map({
                loading: true,
                error: null,
            }),
        );
    },
    [GET_AMMO_ERROR]: (state, action) => {
        return state.merge(
            Map({
                loading: false,
                error: action.error.message,
            }),
        );
    },
    [GET_AMMO_SUCCESS]: (state, action) => {
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
