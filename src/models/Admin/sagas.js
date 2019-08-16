import { takeLatest, put, call } from "redux-saga/effects";
import {
    fetchAmmo,
    fetchGuns,
    fetchUsers
} from "../../api/methods";

import {
    GET_TABLE_DATA_START,
    GET_TABLE_DATA_ERROR,
    GET_TABLE_DATA_SUCCESS
} from "./actions";

function _getTableData() {
    return function*(options) {
        try {
            let response; // eslint-disable-next-line
            switch(options.tableName) {
                case "Ammo":
                    response = yield call(() => fetchAmmo());
                    break;
                case "Users":
                    response = yield call(() => fetchUsers());
                    break;
                case "Guns":
                    response = yield call(() => fetchGuns());
                    break;
            }

            const action = {
                type: GET_TABLE_DATA_SUCCESS,
                tableData: response.data
            };

            yield put(action);
        } catch (error) {
            const action = { type: GET_TABLE_DATA_ERROR, error };

            yield put(action);
        }
    }
}

export function* getTableDataWatcher() {
    yield takeLatest(GET_TABLE_DATA_START, _getTableData());
}

export default [
    getTableDataWatcher(),
];
