import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { IFormInterface } from "@interfaces/IFormInterface";
import CustomFormField from "@components/CustomFormField";

type Props = {
  open: boolean;
  handleClose: () => void;
  form: IFormInterface[];
};

function Modal(props: Props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Add new user</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {props.form.map((field) => (
            <Grid item xs={6} key={field.id}>
              <CustomFormField field={field} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
export default Modal;
