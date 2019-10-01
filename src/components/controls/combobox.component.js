import * as React from 'react';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbComboBox = ({ onchange, placeholder, fields, className,
    items, value, onblur, propertyName, allowFiltering, enabled, floatLabelType, valueTemplate, headerTemplate
    , footerTemplate, itemTemplate, readOnly, sortOrder, width, noRecordsTemplate, groupTemplate,query,
    actionBegin,actionComplete,
    actionFailure,beforeOpen,close}) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <ComboBoxComponent dataSource={items}
            fields={fields}
            placeholder={placeholder}
            id={propertyName}
            change={onchange}
            blur={onblur}
            className={className}
            name={propertyName}
            value={value} itemTemplate={itemTemplate}
            groupTemplate={groupTemplate}
            noRecordsTemplate={noRecordsTemplate}
            allowFiltering={allowFiltering}
            sortOrder={sortOrder}
            width={width}
            valueTemplate={valueTemplate}
            headerTemplate={headerTemplate}
            query={query}
            readOnly={readOnly !== undefined ? readOnly : DefaultPropertyValue.readOnly}
            enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            actionBegin={actionBegin}
            actionComplete={actionComplete}
            actionFailure={actionFailure}
            beforeOpen={beforeOpen}
            close={close}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}>
        </ComboBoxComponent>
    );
};

export default CbComboBox;
