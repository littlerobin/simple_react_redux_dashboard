import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { Random } from "../../../../lib/utils/index";
import { formBuilderActionTypes as ActionType } from "../context/formbuilder.reducer";
import { DispatchContext } from "../context/formbuilder.context";

const DragComponent = ({ className, text, type, id, iconclassname }) => {
  const dispatch = useContext(DispatchContext);

  const [prop, dragRef] = useDrag({
    item: { type, id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleAddControl(item.id);
      }
    }
  });

  const handleAddControl = controltypeid => {
    dispatch({
      type: ActionType.ADD_CONTROL,
      payload: {
        controlid: Random.getString(),
        controltypeid: controltypeid
      }
    });
  };

  return (
    <div
      ref={dragRef}
      className={className}
      style={{ opacity: prop.opacity }}
      onClick={() => handleAddControl(id)}
    >
      {
        <i
          className={"fa fa-fw " + iconclassname}
          style={{ marginRight: 15 }}
        />
      }
      {text}
    </div>
  );
};

export default DragComponent;
