import React from "react";
import { useDispatch } from "react-redux";

import useForm from "../hooks/useForm";
import CbTextBox from "../controls/textbox.component";
import CbButton from "../controls/button.component";
import { onUserLogin } from "../../redux/common/login/login.action";

const INTITAL_STATE = {
  username: "",
  password: ""
};

const LoginComponent = props => {
  const dispatch = useDispatch();
  const { values, handleSubmit, handleChange,handleBlur } = useForm({
    onFormSubmit,
    initialState: INTITAL_STATE
  });

  function onFormSubmit() {
    dispatch(
      onUserLogin({
        username: values.username,
        password: values.password
      })
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div
            className="text-center font-bold theme-forecolor"
            style={{ fontSize: "30px" }}
          >
            Login
          </div>
        </div>
        <div className="form-group">
          <CbTextBox
            placeholder="Email ID"
            type="text"
            propertyname="username"
            className="form-control"
            onchange={handleChange}
            value={values.username}
            validationType="email"
          />
        </div>
        <div className="form-group">
          <CbTextBox
            propertyname="password"
            type="password"
            placeholder="Password"
            className="form-control"
            onchange={handleChange}
            value={values.password}
          />
        </div>
        <div>
        </div>
        <div className="form-label-group">
          <CbButton value="Login" className="btn btn-block form-button" />
        </div>
      </form>
    </>
  );
};

export default LoginComponent;
