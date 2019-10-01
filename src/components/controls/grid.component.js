import * as React from 'react';
import {
    GridComponent,
    Filter, Inject, Sort,
    ExcelExport, Toolbar, Page, Edit, CommandColumn, Reorder
} from '@syncfusion/ej2-react-grids';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbGrid = ({
    dataSource,
    gridColumns,
    gridPageSize,
    isGridPaging,
    isGridSortable,
    isGridFilterable,
    onSelectionChange,
    isGridHoverable,
    toolbar,
    toolbarClick,
    allowExcelExport,
    editOptions,
    allowReordering,
    validation,
    propertyName,
    actionBegin,
    actionComplete,
    actionFailure,
    batchAdd,
    batchCancel,
    batchDelete,
    beforeBatchAdd,
    beforeBatchDelete,
    beforeBatchSave,
    beforeCopy
}) => {
    function toolbarClick1(ClickEventArgs) {
        //Not working
        if (ClickEventArgs.item.text === "Excel Export") {
            test.current.excelExport();
        }

    }
    const test = React.useRef(null);
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    //Validation when uploading  file
    const isValid = (obj, valid) => {
        // Exists
        if (!obj || obj === '') {
            return false;
        }
        // Type
        if (valid.type) {
            if (valid.type === 'number' && isNaN(obj)) {
                return false;
            } else if (valid.type === 'string' && !isNaN(obj)) {
                return false;
            }
        }

        // Min length
        if (valid.minLength) {
            if (JSON.stringify(obj).length < valid.minLength) {
                return false;
            }
        }

        // Date from
        if (valid.from) {
            const date = Date.parse(obj);
            const dateFrom = Date.parse(valid.from);
            if (dateFrom > date) {
                return false;
            }
        }

        // Date to
        if (valid.to) {
            const date = Date.parse(obj);
            const dateTo = Date.parse(valid.to);
            if (dateTo < date) {
                return false;
            }
        }

        return true;
    }

    const customizeCell = (args) => {
        if (!validation)
            return;
        for (let key in args.data) {
            if (validation[key] && !isValid(args.data[key], validation[key]) && args.column.field === key) {
                args.cell.classList.add('errorCell');
            }
        }
    }
    return (
        <GridComponent 
         ref={test}
            dataSource={dataSource}
            queryCellInfo={customizeCell} // MUST be included as props in order to set the validation
            enableHover={isGridHoverable !== undefined ? isGridHoverable : DefaultPropertyValue.isGridHoverable}
            allowFiltering={isGridFilterable !== undefined ? isGridFilterable : DefaultPropertyValue.isGridFilterable}
            allowSelection={onSelectionChange}
            allowSorting={isGridSortable !== undefined ? isGridSortable : DefaultPropertyValue.isGridSortable}
            id={propertyName}
            allowPaging={isGridPaging !== undefined ? isGridPaging : DefaultPropertyValue.isGridPaging}
            columns={gridColumns}
            toolbar={toolbar}
            toolbarClick={toolbarClick1}
            allowExcelExport={allowExcelExport}
            editSettings={editOptions}
            allowReordering={allowReordering !== undefined ? allowReordering : DefaultPropertyValue.allowReordering}
            pageSettings={{ pageCount: gridPageSize !== undefined ? gridPageSize:DefaultPropertyValue.pageSizes , pageSizes: true }}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
            actionBegin={actionBegin}
            actionComplete={actionComplete}
            actionFailure={actionFailure}
            batchAdd={batchAdd}
            batchCancel={batchCancel}
            batchDelete={batchDelete}
            beforeBatchAdd={beforeBatchAdd}
            beforeBatchDelete={beforeBatchDelete}
            beforeBatchSave={beforeBatchSave}
            beforeCopy={beforeCopy}
        >
            {
                <Inject services={[Sort, Filter, Toolbar, ExcelExport, Page,
                    Edit, CommandColumn, Reorder]} />
            }
        </GridComponent>
    );
}

export default CbGrid;