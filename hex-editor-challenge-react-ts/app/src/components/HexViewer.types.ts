export interface HexViewerProps {
  data: string | Uint8Array;
}

export type SelectedValue = {
  type: "hex" | "text";
  value: string;
};
