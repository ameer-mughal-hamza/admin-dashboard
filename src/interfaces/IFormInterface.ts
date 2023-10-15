import { TextFieldVariants } from "@mui/material";

export interface IFormInterface {
  fieldType: "text" | "switch";
  margin?: "dense" | "normal" | "none" | undefined;
  id: string;
  label?: string;
  type?: string;
  fullWidth?: boolean | undefined;
  variant?: TextFieldVariants | undefined;
}
