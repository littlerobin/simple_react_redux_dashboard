import { all, call } from "redux-saga/effects";
import { loginSagas } from "./login/login.saga";

export default function* commonModuleSaga() {
  yield all([call(loginSagas)]);
}
