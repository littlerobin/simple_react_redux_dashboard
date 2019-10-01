import React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbNumberTextBox = ({ placeholder, type, iconName, value, onchange, className,
    onblur, format, min, max
    , propertyName, floatLabelType, enabled, currency, locale, width }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <NumericTextBoxComponent name={propertyName}
            cssClass={className}
            type={type}
            change={onchange}
            blur={onblur}
            placeholder={placeholder}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            value={value}
            enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
            currency={currency}
            format={format !== undefined ? format : DefaultPropertyValue.numberFormat}
            min={min}
            max={max}
            locale={locale}
            width={width}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl} />
    );
};

export default CbNumberTextBox;
