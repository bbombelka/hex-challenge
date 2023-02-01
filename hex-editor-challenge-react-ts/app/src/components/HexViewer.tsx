import React, { useState } from "react";
import { useGridData } from "../hooks/useGridData/useGridData";
import "./HexViewer.styles.css";
import { HexViewerProps, SelectedValue } from "./HexViewer.types";

export default function HexViewer({ data }: HexViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<SelectedValue | null>(
    null
  );

  const { hexData, textData } = useGridData(data);

  const onGridItemClick =
    (index: number, type: SelectedValue["type"]) =>
    (e: React.MouseEvent<HTMLElement>) => {
      setSelectedIndex(index);
      setSelectedValue({ type, value: e.currentTarget.innerText });
    };

  return (
    <div className="container">
      <div className="grid">
        {hexData.map((hex, i) => (
          <div
            key={i}
            className={`grid-item ${
              selectedIndex === i ? "selected-item" : ""
            }`}
            onClick={onGridItemClick(i, "hex")}
          >
            {hex}
          </div>
        ))}
      </div>
      <div className="grid text-grid">
        {textData.map((hex, i) => (
          <div
            key={i}
            className={`grid-item ${
              selectedIndex === i ? "selected-item" : ""
            }`}
            onClick={onGridItemClick(i, "text")}
          >
            {hex}
          </div>
        ))}
      </div>
      {selectedValue && (
        <div className="copy-bar">
          Copy selected {selectedValue.type} to clipboard
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(selectedValue.value)}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
