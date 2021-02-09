import TextField from "@material-ui/core/TextField";

export default function TextBox({ label = "Label" }: { label?: string }) {
  return <TextField label={label} />;
}
