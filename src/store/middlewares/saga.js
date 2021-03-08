import { takeEvery, put, delay } from "redux-saga/effects";
import { incrementAsync } from "../actions/counter-action";

function* incrementCntAsync() {
  yield delay(3000);
  yield put(incrementAsync(1));
}

export function* incrementCnt() {
  yield takeEvery("INC", incrementCntAsync);
}
