import { useSelector } from "react-redux";
import Invoice from "../invoice/invoice.component";
import { selectInvoicesData } from "../../store/invoice/invoice.selector";
import { useSearchParams } from "react-router-dom";

export default function Invoices() {
  const invoicesData = useSelector(selectInvoicesData);
  const [searchParams, setSearchParams] = useSearchParams();

  const typedFilter = searchParams.get("status");
  const statusFilteredData = typedFilter
    ? invoicesData &&
      invoicesData.Data.filter(
        (stat) => stat.status === typedFilter?.toLowerCase()
      )
    : invoicesData && invoicesData.Data;

  return (
    <div className="mt-16 flex flex-col gap-4">
      {statusFilteredData?.map((invoicesData) => (
        <Invoice key={invoicesData.id} data={invoicesData} />
      ))}
    </div>
  );
}
