import React from "react";

import useForm from "../hooks/useForm";
import CbTextBox from "../controls/textbox.component";
import CbComboBox from "../controls/combobox.component";
import CbDateTimePicker from "../controls/datetimepicker.component";
import CbCheckbox from "../controls/checkbox.component";
import CbRadioButton from "../controls/radiobutton.component";
import CbButton from "../controls/button.component";

const INTITAL_STATE = {
  username: ""
};

const VehicleComponent = () => {
  const { values, handleSubmit, handleChange, handleBlur } = useForm({
    onFormSubmit,
    initialState: INTITAL_STATE,
    onHandleChangeProps: {
      onHandleChange: onHandleChange,
      handleEventFor: ["gamecode"]
    },
    onHandleBlurProps: {
      onBlurChange: onBlurChange,
      handleEventFor: ["username"]
    }
  });

  function onBlurChange(event, val) {
    console.log(event, val);
  }

  function onHandleChange(event, val) {
    console.log(event, val);
  }

  function onFormSubmit() {
    console.log(values);
  }

  const fieldscomb = { text: "Game", value: "Game" };
  const comData = [
    { Id: "Game1", Game: "American Football" },
    { Id: "Game2", Game: "Badminton" },
    { Id: "Game3", Game: "Basketball" },
    { Id: "Game4", Game: "Cricket" },
    { Id: "Game5", Game: "Football" },
    { Id: "Game6", Game: "Golf" }
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="form-signin col-sm-12 col-md-6 d-md-inline-block"
    >
      {JSON.stringify(values, null, 2)}
      <div className="form-label-group">
        <CbTextBox
          placeholder="Email ID"
          type="text"
          name="username"
          className="form-control"
          onChange={handleChange}
          onblur={handleBlur}
          value={values.username}
        />
      </div>
      <div className="form-label-group">
        <CbComboBox
          placeholder="Select game"
          id="gamecode"
          className="form-control"
          onChange={handleChange}
          items={comData}
          fields={fieldscomb}
          //   onBlur={handleBlur}
          value={values.game}
        />
      </div>
      <div className="form-label-group">
        <CbDateTimePicker
          placeholder="Select date"
          id="fromdate"
          className="form-control"
          format="dd-MMM-yy hh:mm a"
          onChange={handleChange}
          value={values.fromdate}
        />
      </div>
      <div className="form-label-group flex-child">
        <div>
          <CbCheckbox
            name="skills"
            className="form-control"
            onChange={handleChange}
            label="GoLang"
            value="GoLang"
          />
        </div>
        <div>
          <CbCheckbox
            name="skills"
            className="form-control"
            onChange={handleChange}
            label="React"
            value="React"
          />
        </div>
        <div>
          <CbCheckbox
            name="skills"
            className="form-control"
            onChange={handleChange}
            label="C#"
            value="C#"
          />
        </div>
      </div>

      <div className="form-label-group flex-child">
        <div>
          <CbRadioButton
            id="genderMale"
            label="Male"
            name="gender"
            className="form-control"
            checked={true}
            onChange={handleChange}
            value="Male"
          />
        </div>
        <div>
          <CbRadioButton
            id="genderFemale"
            label="Female"
            name="gender"
            className="form-control"
            checked={false}
            onChange={handleChange}
            value="Female"
          />
        </div>
      </div>

      <div className="form-label-group">
        <CbButton value="Login" className="col-sm-12 col-md-12 form-button" />
      </div>
    </form>
  );
};

export default VehicleComponent;
