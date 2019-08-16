import { all } from "redux-saga/effects";
import usersSagas from "./Users/sagas";
import ammoSagas from "./Ammo/sagas";
import gunsSagas from "./Guns/sagas";
import adminSagas from "./Admin/sagas";

export default function* rootSaga() {
    // prettier-ignore
    yield all([
        ...usersSagas,
        ...ammoSagas,
        ...gunsSagas,
        ...adminSagas,
    ]);
}
