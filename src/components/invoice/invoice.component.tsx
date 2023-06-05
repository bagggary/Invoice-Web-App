import rightarrow from "../../assets/icon-arrow-right.svg";

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
    <div className="border border-transparent hover:border-primary flex  justify-around items-center pl-8 pr-6 py-6 rounded-lg cursor-pointer">
      <div className=" text-sm font-bold ">
        <span className=" text-torko">#</span>
        {id}
      </div>
      <div className="text-sm text-torko font-medium text-center">
        <span className=" text-dark-gray">Due</span> {formatedDate}
      </div>
      <p className="text-sm inline-block font-medium text-[#858BB2]">
        {clientName}
      </p>
      <div className="font-bold text-black-1 text-lg ">
        £ {total.toLocaleString("en-US")}
      </div>
      <div className="bg-slate-400 text-center flex items-center font-bold text-sm  w-[104px] h-10  justify-center text-[#33D69F] gap-2">
        <div className=" w-2 h-2 bg-[#33D69F] rounded-full"></div>
        {status}
      </div>
      <img src={rightarrow} alt="rightarrow" className=" ml-5" />
    </div>
  );
};

export default Invoice;

// (
// );
