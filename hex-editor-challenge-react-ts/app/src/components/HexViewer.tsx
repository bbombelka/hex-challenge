import React, { useMemo, useState } from "react";
import "./HexViewer.styles.css";
interface HexViewerProps {
  data: string | Uint8Array;
}

export default function HexViewer({ data }: HexViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2);
  const hexData = useMemo(() => {
    if (typeof data === "string") {
      return data.split("").map((l) => l.charCodeAt(0).toString(16));
    }

    return Array.from(data).map((n) => n.toString(16));
  }, [data]);

  const textData = useMemo(() => {
    if (typeof data === "string") {
      return data.split("");
    }
    return Array.from(data).map((n) => String.fromCharCode(n));
  }, [data]);

  return (
    <div className="container">
      <div className="hex-grid">
        {hexData.map((hex, i) => (
          <div
            key={i}
            className={`grid-item ${
              selectedIndex === i ? "selected-item" : ""
            }`}
            onClick={() => setSelectedIndex(i)}
          >
            {hex}
          </div>
        ))}
      </div>
      <div className="hex-grid text-grid">
        {textData.map((hex, i) => (
          <div
            key={i}
            className={`grid-item ${
              selectedIndex === i ? "selected-item" : ""
            }`}
            onClick={() => setSelectedIndex(i)}
          >
            {hex}
          </div>
        ))}
      </div>
    </div>
  );
}
