import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {useSelector} from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbDatePicker = ({ value, format, disableDate,min,max,onchange,onblur,propertyName,
    allowEdit,floatLabelType,zIndex,onfocus }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
                <DatePickerComponent id={propertyName}
                 name={propertyName}
                  disableDate={disableDate}
                 format={format} 
                 value={value} 
                 min={min} 
                 max={max} 
                 change={onchange} 
                 blur={onblur}
                 allowEdit={allowEdit}
                 zIndex={zIndex}
                 floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
                 focus={onfocus}
                 enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}/>
    );
};

export default CbDatePicker;
