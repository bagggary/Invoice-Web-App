import rightarrow from "../../assets/icon-arrow-right.svg";
import Status from "../status/status.component";

type InvoicesProps = {
  paymentDue: string;
  id: string;
  status: string;
  clientName: string;
  total: number;
};
type InvoiceProps = {
  data: InvoicesProps;
};
const Invoice: React.FC<InvoiceProps> = ({ data }) => {
  const { id, paymentDue, status, clientName, total } = data;
  const dateString = paymentDue;
  const date = new Date(dateString);
  const formatedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className=" border dark:bg-blue-dark hover:border-solid hover:shadow-none border-transparent duration-200 ease-linear hover:border-primary flex  justify-between items-center pl-8 pr-6 py-6 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center mr-[2em]">
        <div className=" text-sm font-bold mr-[1.75rem] dark:text-white text-black-1 ">
          <span className=" text-torko">#</span>
          {id}
        </div>
        <div className="text-sm text-torko font-medium text-center ml-auto dark:text-gray-light">
          <span className=" text-dark-gray dark:text-gray-light">Due</span>{" "}
          {formatedDate}
        </div>
      </div>
      <div className="flex items-center w-[60%] ">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm inline-block font-medium text-[#858BB2] dark:text-white">
            {clientName}
          </p>
          <div className="font-bold text-black-1 text-lg dark:text-white">
            £{" "}
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <div className="flex items-center">
          <Status status={status} />
          <img src={rightarrow} alt="rightarrow" className=" ml-5" />
        </div>
      </div>
    </div>
  );
};

export default Invoice;

// (
// );
