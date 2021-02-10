import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "../../components/atoms/Button";
import DatePicker from "../../components/atoms/DatePicker";
import TextInput from "../../components/atoms/TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default function UI() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={5}>
        <Paper elevation={3}>
          <h1>Atoms</h1>
          <Button />
          <DatePicker />
          <TextInput />
        </Paper>
      </Paper>
    </div>
  );
}
