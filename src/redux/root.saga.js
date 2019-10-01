import { all, call } from "redux-saga/effects";
import commonModuleSaga from "./common/common.module.saga";

export default function* rootSaga() {
  yield all([call(commonModuleSaga)]);
}
