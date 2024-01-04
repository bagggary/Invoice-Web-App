import { useSelector } from "react-redux";
import Invoice from "../invoice/invoice.component";
import {
  selectInvoicesData,
  selectIsLoadingData,
} from "../../store/invoice/invoice.selector";
import { useSearchParams } from "react-router-dom";
import emtpyInvoice from "../../assets/illustration-empty.svg";
import InvoiceLoadingSkeleton from "../loadingSkeleton/InvoiceLoadingSkeleton.component";

export default function Invoices() {
  const invoicesData = useSelector(selectInvoicesData);
  const [searchParams, _] = useSearchParams();
  const isLoading = useSelector(selectIsLoadingData);

  const typedFilter = searchParams.get("status");

  if (isLoading || Object.keys(invoicesData).length === 0) {
    return <InvoiceLoadingSkeleton />;
  }

  const statusFilteredData = Array.isArray(invoicesData)
    ? typedFilter
      ? invoicesData.filter(
          (stat) => stat.status === typedFilter?.toLowerCase()
        )
      : invoicesData
    : [];

  if (invoicesData.length > 0) {
    return (
      <div className="mt-16 flex flex-col gap-4">
        {statusFilteredData &&
          statusFilteredData?.map((invoicesData) => (
            <Invoice key={invoicesData.id} data={invoicesData} />
          ))}
      </div>
    );
  } else {
    return (
      <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[16rem] p-4">
        <img
          src={emtpyInvoice}
          alt="emptyInvoicesIllustration"
          className=" mb-8 z-[-10]"
        />
        <h4 className=" mb-4 text-xl font-bold text-center text-black-1 dark:text-white tracking-[-0.625px]">
          There is nothing here
        </h4>
        <p className=" text-center font-medium text-sm leading-[15px] text-dark-gray dark:text-gray-light tracking-[-0.25px]">
          Create an invoice by clicking the
          <span className="font-bold"> New Invoice</span> button and get started
        </p>
      </div>
    );
  }
}
