"use client";
import React from "react";

const ClipTable = ({ rows, columns }) => {
  const tableRows = [];

  for (let i = 0; i < rows; i++) {
    const tableCells = [];

    for (let j = 0; j < columns; j++) {
      tableCells.push(
        <td key={`${i}-${j}`} className="border px-4 py-2">
          Cell ({i}, {j})
        </td>
      );
    }

    tableRows.push(
      <tr key={i} className="border">
        {tableCells}
      </tr>
    );
  }

  return (
    <>
      <table className="border-collapse border border-gray-400 rounded-md mx-auto">
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
};

export default ClipTable;
