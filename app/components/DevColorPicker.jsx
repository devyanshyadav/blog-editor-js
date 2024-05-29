"use client";
import React from "react";
import DevButton from "./DevButton";
import { RxValueNone } from "react-icons/rx";

const DevColorPicker = ({ color, setColor }) => {
  return (
    <div className="flex p-2 max-w-52 flex-wrap bg-white shadow border rounded-md items-center justify-center">
      {color.map((e, i) => (
        <DevButton
          ripple={true}
          onClick={() => setColor(e === null ? "unset" : e)}
          size="lg"
          icon={true}
          variant="customForIcon"
          rounded="none"
          key={i}
          style={{
            backgroundColor: e === null ? "#EEEEEE" : e,
            width: "30px",
            height: "30px",
          }}
        >
          {e === null && <RxValueNone className="text-xl text-black font-semibold" />}
        </DevButton>
      ))}
    </div>
  );
};

export default DevColorPicker;
