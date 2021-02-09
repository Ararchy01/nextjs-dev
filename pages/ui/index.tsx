import Paper from "@material-ui/core/Paper";
import Button from "../../components/atoms/Button";
import DatePicker from "../../components/atoms/DatePicker";
import TextInput from "../../components/atoms/TextInput";

export default function UI() {
  return (
    <Paper elevation={1}>
      <Paper elevation={3}>
        <h1>Atoms</h1>
        <Button />
        <DatePicker />
        <TextInput />
      </Paper>
    </Paper>
  );
}
