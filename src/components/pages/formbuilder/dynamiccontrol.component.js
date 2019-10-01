import React from "react";

import { PAGE_CONTROL_TYPES } from "../../../lib/enums/pagecontrols.enum";

import CbTextBox from "../../controls/textbox.component";
import CbNumbericBox from "../../controls/numerictextbox.component";
import CbDateTimePicker from "../../controls/datetimepicker.component";
import CbDatePicker from "../../controls/datepicker.component";
import CbTimePicker from "../../controls/timepicker.component";

import CbComboBox from "../../controls/combobox.component";
import CbMultiSelectCombo from "../../controls/multiselectcombo.component";

import CbMultiSelectList from "../../controls/multiselectlistbox.component";

import CbCheckbox from "../../controls/checkbox.component";
import CbRadioButton from "../../controls/radiobutton.component";

import CbButton from "../../controls/button.component";
import CbFileUpload from "../../controls/fileupload.component";
import CbGrid from "../../controls/grid.component";
// import CbFileUploadToGrid from "../../controls/fileuploadtogrid.component";

const DynamicControlComponent = ({ controltypeid, ...otherprop }) => {
  const renderControl = () => {
    switch (controltypeid) {
      case PAGE_CONTROL_TYPES.TEXTBOX:
        return <CbTextBox {...otherprop} />;
      case PAGE_CONTROL_TYPES.MULTILINETEXTBOX:
        return <CbTextBox multiline="true" {...otherprop} />;
      case PAGE_CONTROL_TYPES.NUMBERBOX:
        return <CbNumbericBox {...otherprop} />;
      case PAGE_CONTROL_TYPES.DECIMALBOX:
        return <CbNumbericBox {...otherprop} />;
      case PAGE_CONTROL_TYPES.PASSWORDBOX:
        return <CbTextBox type="password" {...otherprop} />;
      case PAGE_CONTROL_TYPES.DATETIMEPICKER:
        return <CbDateTimePicker {...otherprop} />;
      case PAGE_CONTROL_TYPES.DATEPICKER:
        return <CbDatePicker {...otherprop} />;
      case PAGE_CONTROL_TYPES.TIMEPICKER:
        return <CbTimePicker {...otherprop} />;
      case PAGE_CONTROL_TYPES.COMBOBOX:
        return <CbComboBox {...otherprop} />;
      case PAGE_CONTROL_TYPES.MULTISELECTCOMBOBOX:
        return <CbMultiSelectCombo {...otherprop} />;
      case PAGE_CONTROL_TYPES.LISTBOX:
        return <CbMultiSelectList {...otherprop} />;
      case PAGE_CONTROL_TYPES.MULTISELECTLISTBOX:
        return <CbMultiSelectList {...otherprop} />;
      case PAGE_CONTROL_TYPES.CHECKBOX:
        return <CbCheckbox {...otherprop} />;
      case PAGE_CONTROL_TYPES.RADIOBUTTON:
        return <CbRadioButton {...otherprop} />;
      case PAGE_CONTROL_TYPES.BUTTON:
        return <CbButton {...otherprop} />;
      case PAGE_CONTROL_TYPES.FILEUPLOAD:
        return <CbFileUpload {...otherprop} />;
      case PAGE_CONTROL_TYPES.GRID:
        return <CbGrid {...otherprop} />;
      // case PAGE_CONTROL_TYPES.FILEUPLOADWITHGRID:
      // return <CbFileUploadToGrid {...otherprop} />;
      default:
        return "";
    }
  };

  return <>{renderControl()}</>;
};

export default DynamicControlComponent;
