import React, { useState, useContext } from "react";
import useForm from "../../hooks/useForm";
import { PAGE_CONTROL_TYPES } from "../../../lib/enums/pagecontrols.enum";

import CbTextBox from "../../controls/textbox.component";
import CbComboBox from "../../controls/combobox.component";
import CbDateTimePicker from "../../controls/datetimepicker.component";
import CbDatePicker from "../../controls/datepicker.component";
import CbTimePicker from "../../controls/timepicker.component";
import CbNumericBox from "../../controls/numerictextbox.component";
import CbCheckBox from "../../controls/checkbox.component";
import CbButton from "../../controls/button.component";

import { formBuilderActionTypes as ActionType } from "./context/formbuilder.reducer";
import { DispatchContext } from "./context/formbuilder.context";

const LABEL_DATA = [
  { key: "textname", value: "name" },
  { key: "textname1", value: "name1" },
  { key: "textname2", value: "name2" },
  { key: "textname3", value: "name3" },
  { key: "textname4", value: "name4" },
  { key: "textname5", value: "name5" }
];
const INTITAL_STATE = {
  labeldata: "",
  datafield: "",
  defaultvalue: "",
  defaultvalue_currentdate: true,

  isrequired: false,
  min: "",
  max: "",
  customvalidation: "",
  data_textfield: "",
  data_valuefield: "",
  data_fillurl: ""
};

const labelComboFields = { text: "value", value: "key" };

const DATAFIELDDATA = [
  { value: "datafield" },
  { value: "datafield1" },
  { value: "datafield2" }
];
const dataFieldComboFields = { text: "value", value: "value" };

const ControlEditorComponent = ({ controlid, controltypeid }) => {
  const dispatch = useContext(DispatchContext);
  const [labelData] = useState(LABEL_DATA);
  const [dataFieldData] = useState(DATAFIELDDATA);

  const { values, handleSubmit, handleChange, handleBlur } = useForm({
    onFormSubmit,
    initialState: INTITAL_STATE
  });

  const removeControl = event => {
    event.preventDefault();
    dispatch({
      type: ActionType.REMOVE_CONTROL,
      payload: {
        controlid: controlid
      }
    });
  };

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit} className="col-md-12 d-md-inline-block">
      <div className="form-label-group" style={{ padding: "10px 0 15px 0" }}>
        <div className="row">
          <div className="col-md-6">
            <CbButton value="Save" className="button-style1" />
          </div>
          <div className="col-md-6">
            <CbButton
              value="Delete"
              className="button-style1"
              onclick={removeControl}
            />
          </div>
        </div>
      </div>
      {JSON.stringify(values, null, 2)}
      <div className="theme-forecolor">Basic Info</div>
      <div className="form-editor-control-group">
        {controltypeid === PAGE_CONTROL_TYPES.RADIOBUTTON ||
        controltypeid === PAGE_CONTROL_TYPES.RADIOBUTTON ? (
          ""
        ) : (
          <div className="form-label-group">
            <CbComboBox
              placeholder="Label"
              items={labelData}
              fields={labelComboFields}
              onchange={handleChange}
              propertyname="labeldata"
              value={values.labeldata}
            />
          </div>
        )}

        <div className="form-label-group">
          <CbComboBox
            placeholder="DataField"
            items={dataFieldData}
            fields={dataFieldComboFields}
            propertyname="datafield"
            value={values.datafield}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbTextBox
            placeholder="Default Value"
            type="text"
            propertyname="defaultvalue"
            value={values.defaultvalue}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbDateTimePicker
            propertyname="defaultvalue"
            value={values.defaultvalue}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbDatePicker
            propertyname="defaultvalue"
            value={values.defaultvalue}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbTimePicker
            propertyname="defaultvalue"
            value={values.defaultvalue}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbCheckBox
            propertyname="defaultvalue_currentdate"
            label="Current Data"
            value={values.defaultvalue_currentdate}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <div className="row">
            <div className="col-md-6">
              <CbComboBox placeholder="Inc/Dec By" />
            </div>
            <div className="col-md-6">
              <CbNumericBox placeholder="Value" decimals="0" />
            </div>
          </div>
        </div>
      </div>
      <div className="theme-forecolor">Validations</div>
      <div className="form-editor-control-group">
        <div className="form-label-group">
          <CbCheckBox
            propertyname="isrequired"
            label="Required"
            value={values.isrequired}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <div className="row">
            <div className="col-md-6">
              <CbNumericBox
                placeholder="Min"
                decimals="0"
                propertyname="min"
                value={values.min}
                onchange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <CbNumericBox
                placeholder="Max"
                decimals="0"
                propertyname="max"
                value={values.max}
                onchange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-label-group">
          <CbTextBox
            placeholder="Custom[Regex]"
            propertyname="customvalidation"
            value={values.customvalidation}
            onchange={handleChange}
          />
        </div>
      </div>
      <div className="theme-forecolor">Data</div>
      <div className="form-editor-control-group">
        <div className="form-label-group">
          <CbTextBox
            placeholder="TextField"
            propertyname="data_textfield"
            value={values.data_textfield}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbTextBox
            placeholder="ValueField"
            propertyname="data_valuefield"
            value={values.data_valuefield}
            onchange={handleChange}
          />
        </div>
        <div className="form-label-group">
          <CbTextBox
            placeholder="Fill Data URL"
            propertyname="data_fillurl"
            value={values.data_fillurl}
            onchange={handleChange}
          />
        </div>
      </div>
      <div className="theme-forecolor">Options</div>
    </form>
  );
};

export default ControlEditorComponent;
