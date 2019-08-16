import { takeLatest, put, call } from "redux-saga/effects";
import { fetchAmmo } from "../../api/methods";

import {
    GET_AMMO_START,
    GET_AMMO_ERROR,
    GET_AMMO_SUCCESS
} from "./actions";

function _getAmmo() {
    return function*(options) {
        try {
            let response = yield call(() => fetchAmmo());
            const action = { type: GET_AMMO_SUCCESS, data: response.data };

            yield put(action);
        } catch (error) {
            const action = { type: GET_AMMO_ERROR, error };

            yield put(action);
        }
    }
}

export function* getAmmoWatcher() {
    yield takeLatest(GET_AMMO_START, _getAmmo());
}

export default [
    getAmmoWatcher(),
];
