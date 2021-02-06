export default function Button({ value }: { value: string }) {
  return (
    <button className="btn text-gray-900 bg-yellow-300  hover:bg-yellow-200">
      {value}
    </button>
  );
}
