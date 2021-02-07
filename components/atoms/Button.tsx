export default function Button({
  value,
  textColor = "gray-900",
  bgColor = "yellow-300",
  hoverBgColor = "yellow-200",
}: {
  value: string;
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
}) {
  return (
    <button
      className={`btn text-${textColor} bg-${bgColor}  hover:bg-${hoverBgColor}`}
    >
      {value}
    </button>
  );
}
