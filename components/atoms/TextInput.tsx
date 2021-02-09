import TextField from "@material-ui/core/TextField";

export default function TextBox({ label = "TextInput" }: { label?: string }) {
  return <TextField label={label} />;
}
