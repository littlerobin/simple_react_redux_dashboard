import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbDropdown = ({ onchange, placeholder, fields, className, 
    items, value, onblur, propertyName, allowFiltering, enabled, floatLabelType, valueTemplate, headerTemplate
    , footerTemplate, itemTemplate, readOnly, sortOrder, width, noRecordsTemplate, groupTemplate }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <DropDownListComponent dataSource={items}
            fields={fields}
            placeholder={placeholder}
            id={propertyName}
            change={onchange}
            blur={onblur}
            className={className}
            name={propertyName}
            value={value}
            itemTemplate={itemTemplate}
            groupTemplate={groupTemplate}
            noRecordsTemplate={noRecordsTemplate}
            allowFiltering={allowFiltering}
            sortOrder={sortOrder}
            width={width}
            valueTemplate={valueTemplate}
            readOnly={readOnly !== undefined ? readOnly : DefaultPropertyValue.readOnly}
            enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}>
        </DropDownListComponent>
    );
};

export default CbDropdown;
