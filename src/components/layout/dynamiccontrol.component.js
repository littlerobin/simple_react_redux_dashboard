import React, { useState, useRef, useLayoutEffect } from "react";
import { Resizable } from "re-resizable";
import { PAGE_CONTROL_TYPES } from "../../lib/enums/pagecontrols.enum";

import CbTextBox from "../controls/textbox.component";
import CbComboBox from "../controls/combobox.component";
import CbDateTimePicker from "../controls/datetimepicker.component";

const DynamicControlComponent = ({
  controlid,
  controltypeid,
  callback,
  ...otherprop
}) => {
  const padding = 60;
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 200, height: 40 });

  useLayoutEffect(() => {
    if (targetRef.current && targetRef.current.parentNode) {
      setDimensions({
        width:
          ((targetRef.current.parentNode.offsetWidth ||
            targetRef.current.parentNode.clientWidth) -
            padding) /
          2,
        height:
          targetRef.current.parentNode.offsetHeight ||
          targetRef.current.parentNode.clientHeight
      });
    }
  }, []);

  const getControl = () => {
    if (controltypeid === PAGE_CONTROL_TYPES.TEXTBOX) {
      return <CbTextBox {...otherprop} readonly />;
    } else if (controltypeid === PAGE_CONTROL_TYPES.NUMERICTEXTBOX) {
      return <CbTextBox {...otherprop} />;
    } else if (controltypeid === PAGE_CONTROL_TYPES.COMBOBOX) {
      return <CbComboBox {...otherprop} />;
    } else if (controltypeid === PAGE_CONTROL_TYPES.DATETIMEPICKER) {
      return <CbDateTimePicker {...otherprop} />;
    }
  };

  const onResizeStop = (e, direction, ref, d) => {
    setDimensions(data => {
      return { width: data.width + d.width, height: data.height + d.height };
    });
  };

  // const handleClick = event => {
  //   event.preventDefault();
  //   if (callback)
  //     callback({
  //       controlid: controlid,
  //       controltypeid: controltypeid,
  //       dimensions: dimensions
  //     });
  // };

  return (
    <>
      <Resizable
        size={{ width: dimensions.width, height: 40 }}
        onResizeStop={onResizeStop}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }}
        className="control-dropbox form-group"
        ref={targetRef}
        // onClick={handleClick}
      >
        <div style={{ height: "auto", width: "auto", pointerEvents: "none" }}>
          {getControl()}
        </div>
      </Resizable>
    </>
  );
};

export default DynamicControlComponent;
