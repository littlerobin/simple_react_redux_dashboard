import React from 'react';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import {useSelector} from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbDateTimePicker = ({ value, format, disableDate,min,max,onchange,onblur,propertyName,
  allowEdit,floatLabelType,zIndex,onfocus}) => {
  const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
  return (
      <DateTimePickerComponent id={propertyName} 
      name={propertyName} 
      disableDate={disableDate} 
      format={format!==undefined?format:DefaultPropertyValue.dateTimePickerFormat} 
      value={value} 
      min={min} 
      max={max} 
      change={onchange} 
      blur={onblur} 
      allowEdit={allowEdit}
      zIndex={zIndex}
      floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
      focus={onfocus}
      enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl} ></DateTimePickerComponent>

  );
};

export default CbDateTimePicker;
