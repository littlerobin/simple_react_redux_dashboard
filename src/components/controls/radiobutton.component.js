import * as React from 'react';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbRadioButton = ({ checked, label, value, name, className, onchange, propertyName, labelPostition }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (

        <RadioButtonComponent id={propertyName}
            checked={checked !== undefined ? checked : DefaultPropertyValue.checked}
            label={label}
            change={onchange}
            labelPostition={labelPostition}
            name={propertyName}
            value={value}
            cssClass={className}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}>
        </RadioButtonComponent>

    );
};

export default CbRadioButton;
