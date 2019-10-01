import React from "react";

import { Formik } from "formik";
// import * as Yup from "yup";
import CbTextBox from "../controls/textbox.component";
import CbButton from "../controls/button.component";

import { create } from "../../lib/http/data.service";

const INTIAL_VAL = { name: "", username: "", password: "" };
const UserDialogComponent = () => {
  const handleForSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const userDataResponse = await create(
        "/entity",
        {
          name: values.name,
          username: values.username,
          password: values.password,
          childof: { uid: "0x2713" },
          usertype: { uid: "0x271c" },
          belongsto: { uid: "0x2733" }
        },
        "user",
        "DT"
      );

      setSubmitting(false);
      resetForm(INTIAL_VAL);
      console.log(userDataResponse.data);
    } catch (e) {
      setSubmitting(false);

      console.log(e);
    }
  };

  return (
    <div>
      <Formik
        onSubmit={handleForSubmit}
        initialValues={INTIAL_VAL}
        // validationSchema={validateRule}
      >
        {({ handleSubmit, handleChange, values, handleBlur, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="form-signin col-sm-12 col-md-12 d-md-inline-block"
          >
            <div className="form-label-group">
              <CbTextBox
                placeholder="Name"
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div className="form-label-group">
              <CbTextBox
                placeholder="Email ID"
                type="text"
                name="username"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </div>
            <div className="form-label-group">
              <CbTextBox
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <div className="form-label-group">
              <CbButton
                value="Save"
                className="col-sm-12 col-md-12 form-button"
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserDialogComponent;
