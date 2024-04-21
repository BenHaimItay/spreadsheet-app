import React from "react";
import Spreadsheet from "react-spreadsheet";
import { SpreadsheetData, SpreadsheetRow } from "../types";

interface MainAreaProps {
  spreadsheet: SpreadsheetData;
  setSpreadsheet: (spreadsheet: SpreadsheetData) => void;
}

const SingleSpreadsheet = ({ spreadsheet, setSpreadsheet }: MainAreaProps) => {
  //👇🏻 adds a new row to the spreadsheet
  const addRow = () => {
    const numberOfColumns = spreadsheet.data[0].length;
    let newRow = [];
    for (let i = 0; i < numberOfColumns; i++) {
      newRow.push({ value: "" });
    }
    setSpreadsheet({
      ...spreadsheet,
      data: [...spreadsheet.data, newRow],
    });
  };

  //👇🏻 adds a new column to the spreadsheet
  const addColumn = () => {
    const spreadsheetData = spreadsheet.data.map((row) => [
      ...row,
      { value: "" },
    ]);
    setSpreadsheet({
      ...spreadsheet,
      data: spreadsheetData,
    });
  };

  return (
    <div className="flex-1 overflow-auto p-5">
      {/** -- Spreadsheet title ---*/}
      <input
        type="text"
        value={spreadsheet.title}
        className="w-full p-2 mb-5 text-center text-2xl font-bold outline-none bg-transparent"
        onChange={(e) =>
          setSpreadsheet({ ...spreadsheet, title: e.target.value })
        }
      />
      {/** -- Spreadsheet rows and columns---*/}
      <div className="flex items-start">
        <Spreadsheet
          data={spreadsheet.data}
          onChange={(data) => {
            console.log("data", data);
            setSpreadsheet({
              ...spreadsheet,
              data: data as SpreadsheetData["data"],
            });
          }}
        />
        {/** -- Add column button ---*/}
        <button
          className="bg-blue-500 text-white rounded-lg ml-6 w-8 h-8 mt-0.5"
          onClick={addColumn}
        >
          +
        </button>
      </div>
      {/** -- Add row button ---*/}
      <button
        className="bg-blue-500 text-white rounded-lg w-8 h-8 mt-5 "
        onClick={addRow}
      >
        +
      </button>
    </div>
  );
};
export default SingleSpreadsheet;
