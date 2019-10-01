import React from 'react';
import { useSelector } from "react-redux";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Validator from "../validations/genericvalidator";
import { DefaultPropertyValue } from "./defaultconfig";

const CbTextBox = ({ placeholder, type, iconName, value, onchange,
     className, onblur, multiline, readonly, propertyName, rows,
    floatLabelType, validationType, enabled }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    const [error, setError] = React.useState();

    const onBlur = (event) => {
        if (validationType !== undefined) {
            let error = Validator(validationType, event.event.target.value);
            if (error.type === undefined) {
                event.event.target.parentElement.classList.remove('e-error');
                setError(null);
            }
            else {
                event.event.target.parentElement.classList.add('e-error');
                setError(error);
            }
        }
    }

    const onFocus = (event) => {
        event.target.parentElement.classList.remove('e-error');
        document.querySelectorAll('.empty-input').forEach(function (a) { a.remove() })
        setError(null);
    }
    return (
        <TextBoxComponent name={propertyName}
            cssClass={className}
            type={type !== undefined ? type : DefaultPropertyValue.TextboxType}
            placeholder={placeholder}
            value={value}
            multiline={multiline}
            readonly={readonly !== undefined ? type : DefaultPropertyValue.readonly}
            rows={rows}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
            enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
            onFocus={onFocus} />
    );
};

export default CbTextBox;
