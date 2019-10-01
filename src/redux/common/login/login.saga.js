import { takeLatest, put, all, call } from "redux-saga/effects";
import { loginUserService } from "./login.api";
import LoginActionTypes from "./login.actiontype";

export function* onUserLogin() {
  yield takeLatest(LoginActionTypes.LOGIN_USER, onUserLoginCallback);
}

export function* onUserLoginCallback(action) {
  try {
    const response = yield call(loginUserService, action.payload);
    console.log(response);

    let data = {};
    if (response.data.user.length > 0) {
      data.UserInfo = response.data.user[0];
      data.UserInfo.status = true;
      data.Menu =
        response.data.menus.length > 0 ? response.data.menus[0].modules : [];
      data.OtherInfo = {
        languageId : 1033,
        isRTL : false
      }
     } else {
      data.UserInfo = {};
      data.UserInfo.status = false;
      data.Menu = [];
      data.OtherInfo = {
        languageId : 1033,
        isRTL : false
      }
    }

    yield put({ type: LoginActionTypes.LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LoginActionTypes.LOGIN_USER_FAILURE, error });
  }
}

export function* onUserLogoutCallback(action) {
  try {
    yield put({ type: LoginActionTypes.LOGOUT_USER_COMPLETE, payload: {} });
  } catch (error) {
    yield put({ type: LoginActionTypes.LOGOUT_USER_COMPLETE, error });
  }
}

export function* onUserLogout() {
  yield takeLatest(LoginActionTypes.LOGOUT_USER, onUserLogoutCallback);
}

export function* loginSagas() {
  yield all([call(onUserLogin), call(onUserLogout)]);
}
