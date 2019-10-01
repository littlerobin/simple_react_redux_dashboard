import React, { useState, useEffect } from "react";
import { PAGE_CONTROL_TYPES_INFO } from "../../lib/enums/pagecontrols.enum";
import { DragItemTypes } from "../../lib/enums/dragitemtypes.enums";

import DragComponent from "./formbuilder/dnd/drag.component";
import DropComponent from "./formbuilder/dnd/drop.component";
import DynamicControl from "../layout/dynamiccontrol.component";
import EditorComponent from "./formbuilder/controleditor.component";

const ScreenComponent = () => {
  const [controlTypesMasterData, setcontrolTypesMasterData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [toggleDetailsView, setToggleDetailsView] = useState(false);
  const [editControlData, setEditControlData] = useState({
    controlid: "",
    controltypeid: "",
    controltypename: ""
  });

  useEffect(() => {
    setcontrolTypesMasterData(PAGE_CONTROL_TYPES_INFO);
  }, []);

  const onDragEnd = data => {
    setPageData([
      ...pageData,
      { controlid: data.id, controltypeid: data.sourceid }
    ]);
  };

  const onDynamicControlCallback = data => {
    //updating the state in immutable way
    const newPageData = pageData.map(row => {
      if (row.controlid === data.controlid)
        return { ...row, dimension: data.dimension };
      else return row;
    });
    //settings final output data
    setPageData(newPageData);

    //setting toggler data
    const controlData = controlTypesMasterData.find(
      row => row.id === data.controltypeid
    );

    setEditControlData({
      controlid: data.controlid,
      controltypeid: data.controltypeid,
      controltypename: controlData.title
    });

    setToggleDetailsView(!toggleDetailsView);
  };

  return (
    <div className="row">
      <div className="page-container col-md-12">
        <div className="page-header page-menu control-header">
          <div
            className={
              toggleDetailsView
                ? "form-builder-details show"
                : "form-builder-details"
            }
          >
            <div className="page-menu-header header1">
              <i
                className="fa fa-fw fa-arrow-left"
                style={{ marginRight: 15 }}
              />
              {editControlData.controltypename}
            </div>
            <EditorComponent />
            <div />
          </div>

          <div className="page-menu-header">Basic Fields</div>
          {controlTypesMasterData.map(controltype => {
            return (
              <DragComponent
                key={controltype.id}
                className="control-drag"
                iconclassname={controltype.iconclassname}
                text={controltype.title}
                id={controltype.id}
                type={DragItemTypes.PAGE_CONTROLS}
                dragendcallback={onDragEnd}
              />
            );
          })}
          <div className="page-menu-header">Specific Fields</div>
          <div className="page-menu-header">Other Fields</div>
        </div>

        <div style={{ width: "100%" }}>
          <DropComponent
            className="page-header control-header"
            style={{
              minHeight: "100%",
              background: "rgb(68, 68, 68)"
            }}
            type={DragItemTypes.PAGE_CONTROLS}
            id="PageControls"
          >
            <form className="form-group form-builder-container">
              {pageData &&
                pageData.map(data => {
                  return (
                    <DynamicControl
                      key={data.controlid}
                      controlid={data.controlid}
                      controltypeid={data.controltypeid}
                      placeholder="Label"
                      className="form-control"
                      callback={onDynamicControlCallback}
                    />
                  );
                })}
            </form>
          </DropComponent>
        </div>
      </div>
    </div>
  );
};

export default ScreenComponent;
