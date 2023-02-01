import { useMemo } from "react";

export const useGridData = (data: string | Uint8Array) => {
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

  return { hexData, textData };
};
