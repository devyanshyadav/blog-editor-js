import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Tooltip } from "react-tooltip";

const DevTooltip = ({ children, place = "bottom", tipData }) => {
  const [mounted, setMounted] = useState(false);
  const Id = useId();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        createPortal(
          <Tooltip
            id={Id}
            place={place}
            offset={2}
            style={{ backgroundColor: "transparent", padding: "0px", zIndex: 1000 }}
          >
            <div className="bg-cyan-700 border border-cyan-400 text-xs px-2 rounded-full text-white">
              {tipData}
            </div>
          </Tooltip>,
          document.body
        )}
      <div className="w-fit" data-tooltip-id={Id}>
        {children}
      </div>
    </>
  );
};

export default DevTooltip;
