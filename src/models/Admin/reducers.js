import { Map } from "immutable";

import {
    GET_TABLE_DATA_START,
    GET_TABLE_DATA_ERROR,
    GET_TABLE_DATA_SUCCESS
} from "./actions";

const initialState = Map({
    loading: false,
    error: null,
    tableData: null,
});

const actionsMap = {
    [GET_TABLE_DATA_START]: state => {
        return state.merge(
            Map({
                loading: true,
                error: null,
            }),
        );
    },
    [GET_TABLE_DATA_ERROR]: (state, action) => {
        return state.merge(
            Map({
                loading: false,
                error: action.error.message,
            }),
        );
    },
    [GET_TABLE_DATA_SUCCESS]: (state, action) => {
        return state.merge(
            Map({
                loading: false,
                error: null,
                tableData: action.tableData,
            }),
        );
    },
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
