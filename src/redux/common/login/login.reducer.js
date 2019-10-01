import LoginActionTypes from "./login.actiontype";

const INITIAL_STATE = {
  UserInfo: {},
  Menu: [],
  OtherInfo : {
    languageId : 1033,
    isRTL : false
  }
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, ...action.payload };
    case LoginActionTypes.LOGOUT_USER_COMPLETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default LoginReducer;
