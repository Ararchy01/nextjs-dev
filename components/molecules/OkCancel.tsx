import Button from "../atoms/Button";

export default function OkCancel() {
  return (
    <div className="justify-center flex flex-col sm:flex-row space-x-2">
      <Button value="OK" />
      <Button value="Cancel" />
    </div>
  );
}
