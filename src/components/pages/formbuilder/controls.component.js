import React, { useContext } from "react";
import DragComponent from "./dnd/drag.component";
import EditorComponent from "./controleditor.component";

import { StateContext } from "./context/formbuilder.context";
import { DispatchContext } from "./context/formbuilder.context";
import { formBuilderActionTypes as ActionType } from "./context/formbuilder.reducer";

const ControlsComponent = ({ controltypes, dragtype, toggleDetailsView }) => {
  const { editcontrolinfo } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const displayHeader = () => {
    const controlData =
      controltypes &&
      controltypes.find(a => a.id === editcontrolinfo.controltypeid);

    if (controlData) return controlData.title;
    else return "";
  };

  const hideEditView = () => {
    dispatch({
      type: ActionType.TOGGLE_CONTROL_EDIT,
      payload: {
        ...editcontrolinfo,
        toggleeditview: false
      }
    });
  };

  return (
    <div className="page-menu control-header page-container-style">
      <div
        className={
          editcontrolinfo && editcontrolinfo.toggleeditview
            ? "form-builder-details show"
            : "form-builder-details"
        }
      >
        <div
          className="page-menu-header header1 theme-forecolor"
          onClick={hideEditView}
        >
          <i className="fa fa-fw fa-arrow-left" style={{ marginRight: 15 }} />
          {displayHeader()}
        </div>
        <EditorComponent
          controlid={editcontrolinfo.controlid}
          controltypeid={editcontrolinfo.controltypeid}
        />
        <div />
      </div>

      <div className="page-menu-header theme-forecolor">Basic Fields</div>
      {controltypes &&
        controltypes.map(controltype => {
          return (
            <DragComponent
              key={controltype.id}
              className="control-drag"
              iconclassname={controltype.iconclassname}
              text={controltype.title}
              id={controltype.id}
              type={dragtype}
            />
          );
        })}
      <div className="page-menu-header theme-forecolor">Specific Fields</div>
      <div className="page-menu-header theme-forecolor">Other Fields</div>
    </div>
  );
};

export default ControlsComponent;
