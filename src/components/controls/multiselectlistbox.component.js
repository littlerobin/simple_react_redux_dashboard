import * as React from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";


const CbMultiSelectList = ({ onchange, onblur, placeholder, fields,
    items, mode, showSelectAll, showDropDownIcon, filterBarPlaceholder, propertyName, floatLabelType,
    enabled, footerTemplate, groupTemplate, headerTemplate, locale, maximumSelectionLength, itemTemplate,
    hideSelectedItem, noRecordsTemplate, readOnly,valueTemplate,query,
    actionBegin,actionComplete,
    actionFailure,beforeOpen,close}) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <MultiSelectComponent id={propertyName}
            dataSource={items}
            name={propertyName}
            fields={fields}
            placeholder={placeholder}
            mode={mode}
            showSelectAll={showSelectAll}
            showDropDownIcon={showDropDownIcon}
            filterBarPlaceholder={filterBarPlaceholder}
            change={onchange}
            blur={onblur}
            footerTemplate={footerTemplate}
            headerTemplate={headerTemplate}
            locale={locale}
            maximumSelectionLength={maximumSelectionLength}
            itemTemplate={itemTemplate}
            hideSelectedItem={hideSelectedItem}
            groupTemplate={groupTemplate}
            noRecordsTemplate={noRecordsTemplate}
            valueTemplate={valueTemplate}
            query={query}
            readOnly={readOnly !== undefined ? readOnly : DefaultPropertyValue.readOnly}
            enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
            floatLabelType={floatLabelType !== undefined ? floatLabelType : DefaultPropertyValue.floatLabelType}
            actionBegin={actionBegin}
            actionComplete={actionComplete}
            actionFailure={actionFailure}
            beforeOpen={beforeOpen}
            close={close}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
        >
            <Inject services={[CheckBoxSelection]} />
        </MultiSelectComponent>

    );
};

export default CbMultiSelectList;
