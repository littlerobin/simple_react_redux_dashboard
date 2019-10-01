import React, { useState } from 'react';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import Grid from './GenericGrid';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbFileUploadToGrid = ({ asyncSettings,
    minFileSize, maxFileSize, onchange, model,
    propertyName, allowedExtensions, autoUpload, enabled, locale, buttons }) => {
    const [data, setData] = useState(0);
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    const transformation = (args) => {
        //var name = args.file.rawFile.name;
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });

            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];

            const dataF = XLSX.utils.sheet_to_csv(ws, { header: 1 });

            // Transforming csv file into JSON object
            let res = csvJSON(dataF);

            // Removing empty keys
            res = JSON.parse(JSON.stringify(res).replace(/\s(?=\w+":)/g, ""));
            for (let i = res.length; i > 0; i--) {
                let deleting = true;
                for (let key in res[i - 1]) {
                    if (res[i - 1][key] !== '' && res[i - 1][key] !== undefined) {
                        deleting = false;
                        break;
                    }
                }
                if (deleting) res.pop();
            }

            setData(data => res)
        };

        reader.readAsBinaryString(args.file.rawFile);
    }

    const csvJSON = (csv) => {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }

        return result;
    }

    const onRemoveFile = (args) => {
        args.postRawFile = false;
    }

    // Eg: Values in the grid that do not fall into one of these rules will be highlighted in red
    const properties1 = {
        OrderID: {
            type: 'number', // 'number', 'string'
            minLength: 5,
            required: true
        },
        CustomerID: {
            type: 'string', // 'number', 'string'
            minLength: 1,
            required: true
        },
        ShipCity: {
            type: 'string', // 'number', 'string'
            minLength: 1,
            required: false
        },
        OrderDate: {
            from: '12/17/1995', // mm/dd/yyyy
            to: '12/21/2019',// mm/dd/yyyy
            required: false
        }
    }
    const onUploadSuccess = (args) => {
        // Transforming uploaded file to .csv
        transformation(args);
    }

    return (
        <div >

            <UploaderComponent id={propertyName}
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
            >
            </UploaderComponent>

            {data ?
                <Grid dataSource={data}
                    validation={model} // Passing validation model 
                />
                : null
            }
        </div>
    );
};

export default CbFileUploadToGrid;
