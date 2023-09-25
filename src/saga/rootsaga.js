import { all } from "redux-saga/effects";
import { watctUSerList } from "./userSaga";



export default function* rootSaga() {
    yield all([watctUSerList()])

}