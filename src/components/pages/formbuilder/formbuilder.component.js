import React, { useReducer } from "react";
import ControlsComponent from "./controls.component";
import ControlContainerComponent from "./controlcontainer.component";

import { PAGE_CONTROL_TYPES_INFO } from "../../../lib/enums/pagecontrols.enum";
import { DragItemTypes } from "../../../lib/enums/dragitemtypes.enums";

import { StateContext, DispatchContext } from "./context/formbuilder.context";
import { formBuilderReducer } from "./context/formbuilder.reducer";

const INITIAL_DATA = {
  controls: [],
  layout: [],
  editcontrolinfo: {}
};
const FormBuilderComponent = () => {
  const [state, dispatch] = useReducer(formBuilderReducer, INITIAL_DATA);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <ControlsComponent
            controltypes={PAGE_CONTROL_TYPES_INFO}
            dragtype={DragItemTypes.PAGE_CONTROLS}
          />

          <ControlContainerComponent dragtype={DragItemTypes.PAGE_CONTROLS} />
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default FormBuilderComponent;
