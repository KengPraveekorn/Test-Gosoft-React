import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { uuid } from "../../utils/uuid";
import { componentsActions } from "../../store/components";
import { AvailableComponents } from "../Components";

import "./components-picker.css";

export const ComponentsPicker = ({ lockedPicker = true }) => {
  const [clicked, setClicked] = useState(lockedPicker);
  const dispatch = useDispatch();
  const onComponentClick = (layout) => {
    setClicked(!lockedPicker);
    dispatch(componentsActions.addComponent({ id: uuid(), layout }));
  };

  return (
    <div className="components-picker">
      {AvailableComponents.map((component) => (
        <div
          // className="components-picker__component"
          className={`${
            clicked
              ? "components-picker__component"
              : "components-picker__component--disabled"
          }`}
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
};
