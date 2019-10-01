import * as React from 'react';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbCheckbox = ({ checked = false, label, disabled,
  indeterminate, className, value, onchange, onblur, propertyName }) => {
  const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
  return (
    <CheckBoxComponent
      disabled={disabled}
      indeterminate={indeterminate}
      className={className}
      change={onchange}
      blur={onblur}
      name={propertyName}
      checked={checked !== undefined ? checked : DefaultPropertyValue.checked}
      label={label}
      value={value}
      cssClass={className}
      enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
    >
    </CheckBoxComponent>
  );
};

export default CbCheckbox;
