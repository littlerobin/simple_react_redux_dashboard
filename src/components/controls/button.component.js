import * as React from 'react';
import { useSelector } from 'react-redux';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DefaultPropertyValue } from "./defaultconfig";

const CbButton = ({ disabled = false,
    onclick,
    value,
    className, propertyName, isToggle, isPrimary, content, }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <ButtonComponent name={propertyName} id={propertyName}
            onClick={onclick}
            disabled={disabled}
            cssClass={className}
            isToggle={isToggle}
            isPrimary={isPrimary}
            content={content}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}>
            {value}
        </ButtonComponent>
    );
};

export default CbButton;
