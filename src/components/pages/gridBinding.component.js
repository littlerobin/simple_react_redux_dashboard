import CbGrid from '../controls/grid.component';
import * as React from 'react';
import { useState } from 'react';
import  axios from "axios";

const GridBinding =(props)=> {
    
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

  const actionBegin=(args)=>{ 
    if(args.requestType === "save") { 
        console.log(args.data); // edited data 
    } 
    if(args.requestType === "delete") { 
        console.log(args.data); // edited data 
    } 
} 

    return(
    <CbGrid dataSource={GridData}  
        gridColumns={columns}
        id='ExcelExport'
        toolbar={toolbar}
        editOptions={editOptions}
        actionBegin={actionBegin}
        propertyName={'ExcelExport'}
        ></CbGrid>
        )
};
export default GridBinding;

