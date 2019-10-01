import LoginActionTypes from "./login.actiontype";

export const onUserLogin = data => {
  return { type: LoginActionTypes.LOGIN_USER, payload: data };
};

export const onUserLogout = data => {
  return { type: LoginActionTypes.LOGOUT_USER };
};
