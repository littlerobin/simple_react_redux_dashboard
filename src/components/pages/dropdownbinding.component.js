import CbMultiCombo from '../controls/multiselectcombo.component';
import * as React from 'react';
import { useState } from 'react';
import  axios from "axios";

const DropdownBinding =(props)=> {
    
    const [GridData, SetGridData] = useState([]);

    const toolbar = ['ExcelExport', 'Search','Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true }

    const columns=[ 
        { field: 'EmployeeID', headerText: 'EmployeeID', width: 120, type: 'number', editType:"numericedit" }, 
        { field: 'FirstName', width: 140, headerText: 'FirstName', type: 'string', allowFiltering:false }, 
        { field: 'Designation', width: 140, headerText: 'Designation', type: 'string' }, 
        { field: 'Country', width: 140, headerText: 'Country', type: 'string' } ,
    ]; 

  React.useEffect(() => {
    async function fetchData() {
        axios
        .get('https://ej2services.syncfusion.com/production/web-services/api/Employees')
        .then(response => {
            SetGridData(response.data);
        }
        )
        .catch(error => console.log(error.response));
        console.log(GridData)
      }
      fetchData(); 
  },[]);

  const fields =["",""]
  const onchange=(args)=>{ 
    if(args.requestType === "save") { 
        console.log(args.data); // edited data 
    } 
    if(args.requestType === "delete") { 
        console.log(args.data); // edited data 
    } 
} 
    return(
    <React.Fragment>
    <CbMultiCombo 
    dataSource={GridData}  
        propertyName='mydpr'
        onchange={onchange}
        fields ={fields}
        ></CbMultiCombo>
        </React.Fragment>
        
        )
};
export default DropdownBinding;

