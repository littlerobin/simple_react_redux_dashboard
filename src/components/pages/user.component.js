import React, { useState, useEffect } from "react";

import CbGrid from "../controls/grid.component";
import { get } from "../../lib/http/data.service";
import UserDialogComponent from "./userdialog.component";

const UserComponent = () => {
  // const [userData, setUserData] = useState([]);

  // const userGridColumns = [
  //   {
  //     type: "checkbox",
  //     width: "50"
  //   },
  //   {
  //     field: "name",
  //     headerText: "Name",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   },
  //   {
  //     field: "username",
  //     headerText: "User Name",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   },
  //   {
  //     field: "usertypename",
  //     headerText: "User Type",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   },
  //   {
  //     field: "companyname",
  //     headerText: "Company Name",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   },
  //   {
  //     field: "regionname",
  //     headerText: "Region Name",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   },
  //   {
  //     field: "departmentname",
  //     headerText: "Department Name",
  //     textAlign: "left",
  //     headerTextAlign: "center"
  //   }
  // ];

  // const toolBarForUserGrid = [
  //   "Add",
  //   "Edit",
  //   "Search",
  //   "Print",
  //   "ColumnChooser",
  //   "ExcelExport"
  // ];

  // const editSettings = {
  //   allowEditing: true,
  //   allowAdding: true,
  //   mode: "Dialog",
  //   template: () => {
  //     return <UserDialogComponent />;
  //   }
  // };

  // const selectionsettings = { persistSelection: true };

  // //const saveUserData = () => {};

  // const getUserData = async () => {
  //   const userDataResponse = await get(
  //     "/getentity",
  //     { tableuid: "0x2713" },
  //     "user",
  //     "DT"
  //   );

  //   setUserData(userDataResponse.data.data);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <>
      {/* <CbGrid
        dataSource={userData}
        gridColumns={userGridColumns}
        selectionsettings={selectionsettings}
        allowExcelExport={true}
        toolbar={toolBarForUserGrid}
        editOptions={editSettings}
      /> */}
      user
    </>
  );
};

export default UserComponent;
