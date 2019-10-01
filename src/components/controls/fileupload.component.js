import React from 'react';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbFileUpload = ({ type, asyncSettings, minFileSize, maxFileSize, onchange,
    propertyName, allowedExtensions, autoUpload, enabled, locale, buttons, multiple }) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    var i = 0; var j = 1; var k = 2;
    var rowVal = 1;
    const fileObj = React.useRef(null);
    const onUploadSuccess = (args) => {
        var table = document.getElementById("myTable");
        var row = table.insertRow(rowVal);
        var cell1 = row.insertCell(i);
        var cell2 = row.insertCell(j);
        var cell3 = row.insertCell(k);
        cell1.innerHTML = rowVal + '.' + args.file.name;
        cell2.innerHTML = fileObj.current.bytesToSize(args.file.size);
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.setAttribute("id", rowVal);
        cell3.appendChild(btn);
        document.getElementById(rowVal).addEventListener('click', function (e) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            rowVal--;
        })
        rowVal++;
    }
    const onRemoveFile = (args) => {
        args.postRawFile = false;
    }
    return (
        <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
            <div className="position-relative">
                <UploaderComponent id={propertyName} type={type} ref={fileObj}
                    showFileList={false}
                    success={onUploadSuccess.bind(this)}
                    asyncSettings={asyncSettings}
                    removing={onRemoveFile.bind(this)}
                    minFileSize={minFileSize}
                    maxFileSize={maxFileSize}
                    change={onchange}
                    enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
                    enabled={enabled !== undefined ? enabled : DefaultPropertyValue.enabled}
                    allowedExtensions={allowedExtensions}
                    buttons={buttons}
                    autoUpload={autoUpload}
                    locale={locale}
                    multiple={multiple}
                    >
                </UploaderComponent>
            </div>

            <table id="myTable">
                <thead>
                    <tr>
                        <td>File Name</td>
                        <td>File Size</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

        </div>
    );
};

export default CbFileUpload;
