import { takeLatest, put, call } from "redux-saga/effects";
import { fetchGuns } from "../../api/methods";

import {
    GET_GUNS_START,
    GET_GUNS_ERROR,
    GET_GUNS_SUCCESS
} from "./actions";

function _getGuns() {
    return function*(options) {
        try {
            let response = yield call(() => fetchGuns());
            const action = { type: GET_GUNS_SUCCESS, data: response.data };

            yield put(action);
        } catch (error) {
            const action = { type: GET_GUNS_ERROR, error };

            yield put(action);
        }
    }
}

export function* getGunsWatcher() {
    yield takeLatest(GET_GUNS_START, _getGuns());
}

export default [
    getGunsWatcher(),
];
