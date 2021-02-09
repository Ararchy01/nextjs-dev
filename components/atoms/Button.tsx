import MButton from "@material-ui/core/Button";

export default function Button({ value }: { value: string }) {
  return (
    <MButton color="primary" variant="contained">
      {value}
    </MButton>
  );
}
