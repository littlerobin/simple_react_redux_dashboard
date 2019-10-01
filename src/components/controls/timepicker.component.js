import React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbTimePicker = ({ value, format, disableDate, min, max, onchange, onblur, propertyName, onfocus,
  hide, show, width, zIndex, placeholder, allowEdit, floatLabelType }) => {
  const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
  return (
    <TimePickerComponent id={propertyName}
      disableDate={disableDate}
      format={format}
      value={value}
      min={min}
      max={max}
      hide={hide}
      show={show}
      width={width}
      placeholder={placeholder}
      allowEdit={allowEdit}
      zIndex={zIndex}
      floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
      change={onchange}
      blur={onblur}
      focus={onfocus}
      enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl} />
  );
};

export default CbTimePicker;
