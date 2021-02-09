import TextField from "@material-ui/core/TextField";

export default function DatePicker({
  label = "DatePicker",
}: {
  label?: string;
}) {
  return (
    <TextField
      id="date"
      label={label}
      type="date"
      defaultValue="2017-05-24"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
