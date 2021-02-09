import MButton from "@material-ui/core/Button";

export default function Button({ label = "Button" }: { label?: string }) {
  return (
    <MButton color="primary" variant="contained">
      {label}
    </MButton>
  );
}
