import { useMemo } from "react";

const SPECIAL_CHARACTER = ".";

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

    const unreadableCodes = getUnreadableCodes();

    return Array.from(data).map((n) =>
      unreadableCodes.includes(n) ? SPECIAL_CHARACTER : String.fromCharCode(n)
    );
  }, [data]);

  return { hexData, textData };
};

function getUnreadableCodes() {
  return [
    ...Array.from({ length: 32 }, (x, i) => i),
    ...Array.from({ length: 33 }, (x, i) => i + 127),
  ];
}
