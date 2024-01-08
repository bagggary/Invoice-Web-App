export default function Alert({
  message,
  type,
}: {
  message: string;
  type: string;
}) {
  const alertType = {
    success: "bg-green-100 border-l-4 border-green-500 text-green-700 p-4",
    failed: "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4",
  };
  return (
    <div className={alertType[type]} role="alert">
      <p className="font-bold">{type === "success" ? "Success" : "Failed"}</p>
      <p>{message}</p>
    </div>
  );
}
