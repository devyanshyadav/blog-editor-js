import React, { useId } from "react";
import { Tooltip } from "react-tooltip";

const DevTooltip = ({ children, place = "top", tipData }) => {
  const Id = useId();
  return (
    <>
      <Tooltip
        id={Id}
        place={place}
        offset={2}
        style={{ backgroundColor: "transparent", padding: "0px" }}
      >
        <div className="bg-cyan-700 border border-cyan-400 text-sm px-2 rounded-full text-white">
          {tipData}
        </div>
      </Tooltip>
      <div className="w-fit" data-tooltip-id={Id}>
        {children}
      </div>
    </>
  );
};

export default DevTooltip;
