import React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbdecimalTextBox = ({ placeholder, value, onchange, className, onblur,
    format, min, max
    , propertyName, validateDecimalOnType, decimals, floatLabelType, locale, width }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <NumericTextBoxComponent name={propertyName} cssClass={className}
            change={onchange} blur={onblur}
            placeholder={placeholder}
            value={value}
            format={format !== undefined ? format : DefaultPropertyValue.decimalFormat}
            min={min} max={max} validateDecimalOnType={validateDecimalOnType}
            decimals={decimals}
            locale={locale}
            width={width}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl} />
    );
};

export default CbdecimalTextBox;
