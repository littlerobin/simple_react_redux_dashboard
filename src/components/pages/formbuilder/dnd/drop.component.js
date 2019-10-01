import React from "react";
import { useDrop } from "react-dnd";

const DropComponent = ({ type, id, className, style, children }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: type,
    drop: () => ({ id: id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;
  let backgroundColor = "#000";
  if (isActive) {
    backgroundColor = "#0B0C10";
  } else if (canDrop) {
    backgroundColor = "#101010";
  }

  return (
    <div
      ref={dropRef}
      className={className}
      style={{ ...style, backgroundColor }}
    >
      {children}
    </div>
  );
};

export default DropComponent;
