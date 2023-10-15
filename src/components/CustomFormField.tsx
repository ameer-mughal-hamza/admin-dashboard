import { IFormInterface } from "@interfaces/IFormInterface";
import { FormControlLabel, Switch, TextField } from "@mui/material";

type Props = {
  field: IFormInterface;
};

const CustomFormField = ({ field }: Props) => {
  const { margin, id, label, type, fullWidth, variant } = {
    ...field,
  };
  if (field.fieldType === "text") {
    return (
      <TextField
        autoFocus
        margin={margin}
        id={id}
        label={label}
        type={type}
        fullWidth={fullWidth}
        variant={variant}
      />
    );
  }
  if (field.fieldType === "switch") {
    return (
      <FormControlLabel control={<Switch defaultChecked />} label={label} />
    );
  }
};

export default CustomFormField;
