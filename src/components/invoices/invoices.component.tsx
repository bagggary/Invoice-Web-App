import { useSelector } from "react-redux";
import Invoice from "../invoice/invoice.component";
import { selectInvoicesData } from "../../store/invoice/invoice.selector";

export default function Invoices() {
  const { Data } = useSelector(selectInvoicesData);

  return (
    <div className="mt-16 flex flex-col gap-4">
      {Data?.map((invoicesData) => (
        <Invoice key={invoicesData.id} data={invoicesData} />
      ))}
    </div>
  );
}
