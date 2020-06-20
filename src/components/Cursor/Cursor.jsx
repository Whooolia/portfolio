import React, { useState, useEffect } from "react";
import CircleCursor from "./Cursor.styles";

const Cursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setX(e.pageX);
      setY(e.pageY);
    });
  });
  return (
    <CircleCursor
      style={{ left: `${x}px`, top: `${y}px` }}
      classNames="cursor"
    />
  );
};

export default Cursor;
