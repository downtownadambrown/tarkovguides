import { takeLatest, put, call } from "redux-saga/effects";
import { fetchUsers } from "../../api/methods";

import {
    GET_USERS_START,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from "./actions";

function _getUsers() {
    return function*(options) {
        try {
            let response = yield call(() => fetchUsers());
            const action = { type: GET_USERS_SUCCESS, data: response.data };

            yield put(action);
        } catch (error) {
            const action = { type: GET_USERS_ERROR, error };

            yield put(action);
        }
    }
}

export function* getUsersWatcher() {
    yield takeLatest(GET_USERS_START, _getUsers());
}

export default [
    getUsersWatcher(),
];
