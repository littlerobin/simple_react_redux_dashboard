import React, { useContext } from "react";
import DropComponent from "./dnd/drop.component";
import DynamicControl from "./dynamiccontrol.component";

import { WidthProvider, Responsive } from "react-grid-layout";

import { StateContext } from "./context/formbuilder.context";
import { DispatchContext } from "./context/formbuilder.context";

import { formBuilderActionTypes as ActionType } from "./context/formbuilder.reducer";

import "./style.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ControlContainerComponent = ({ dragtype }) => {
  const { controls, layout } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const defaultProps = {
    className: "layout",
    rowHeight: 40,
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  };

  const handleGridBreakpointChange = (breakpoint, cols) => {
    console.log("BreakPoint");
    console.log(breakpoint);
    console.log(cols);
  };

  const handleGridLayoutChange = layout => {
    dispatch({
      type: ActionType.MODIFY_LAYOUTS,
      payload: layout
    });
  };

  const handleControlEdit = (event, data) => {
    event.preventDefault();

    dispatch({
      type: ActionType.TOGGLE_CONTROL_EDIT,
      payload: {
        ...data,
        toggleeditview: true
      }
    });
  };

  const displayLayout = () => {
    let layoutResponse = "";
    layoutResponse =
      layout &&
      layout.map(layout => {
        const controlData = controls.find(c => c.controlid === layout.i);
        return (
          <div
            key={layout.i}
            data-grid={layout}
            onDoubleClick={event => handleControlEdit(event, controlData)}
          >
            <div style={{ padding: "0px 20px 0 10px", pointerEvents: "none" }}>
              <DynamicControl
                controltypeid={controlData.controltypeid}
              ></DynamicControl>
            </div>
          </div>
        );
      });

    return layoutResponse;
  };

  return (
    <DropComponent
      className="form-dropbox-container page-container-style"
      type={dragtype}
      id="PageControls"
    >
      {layout && layout.length > 0 ? (
        <div className="header-style1 theme-forecolor"> New Form</div>
      ) : (
        ""
      )}
      <ResponsiveReactGridLayout
        onLayoutChange={handleGridLayoutChange}
        onBreakpointChange={handleGridBreakpointChange}
        {...defaultProps}
      >
        {displayLayout()}
      </ResponsiveReactGridLayout>
    </DropComponent>
  );
};

export default ControlContainerComponent;
