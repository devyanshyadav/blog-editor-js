"use client";
import React, { useEffect, useState, useRef, useId } from "react";
import { Tooltip as Popover } from "react-tooltip";
import { createPortal } from "react-dom";
import clsx from "clsx";

const DevPopover = ({
  children = "Popover Content",
  popButton,
  contentClick = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const popoverRef = useRef(null);
  const randomId = useId();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setMounted(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      {mounted &&
        createPortal(
          <Popover
            clickable={mounted ? true : false}
            events={["click"]}
            isOpen
            id={randomId}
            place="bottom"
            offset={1}
            style={{
              backgroundColor: "unset",
              padding: "0px",
              zIndex: 1000,
            }}
          >
            <div
              ref={popoverRef}
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className={clsx(
                "origin-top",
                !children && "p-2 rounded-lg bg-slate-800"
              )}
            >
              {children && children}
            </div>
          </Popover>,
          document.body
        )}
      <div className="flex items-center justify-center" onClick={() => setMounted(!mounted)} data-tooltip-id={randomId}>
        {popButton}
      </div>
    </div>
  );
};

export default DevPopover;
