import { Link, useParams } from "react-router-dom";
import backArrow from "../../assets/icon-arrow-left.svg";
import Status from "../../components/status/status.component";
import Button from "../../components/Button.component";
import { useSelector } from "react-redux";
import { selectInvoicesData } from "../../store/invoice/invoice.selector";

const Details = () => {
  // const { id } = useParams();
  const { Data } = useSelector(selectInvoicesData);
  console.log(Data);
  return (
    <div className="md:pt-[72px] md:w-[730px] w-[672px] py-14 mx-auto min-h-screen  border border-red">
      <Link to=".." className="flex items-center gap-6 cursor-pointer ">
        <img src={backArrow} alt="back arrow" />
        <p className="font-bold text-sm hover:text-torko dark:text-white">
          Go back
        </p>
      </Link>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="w-full bg-white dark:bg-blue-dark h-[88px] mt-8 rounded-lg flex justify-between px-8">
        <div className="flex  items-center">
          <p className=" font-medium text-sm text-[#858BB2] dark:text-gray-light">
            Status
          </p>
          <Status status="paid" />
        </div>
        <div className="flex items-center gap-2">
          <Button text="Edit" type="secondry" />
          <Button text="Delete" type="danger" />
          <Button text="Mark as Paid" type="primary" />
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="w-full bg-white dark:bg-blue-dark mt-6 rounded-lg"></div>
    </div>
  );
};

export default Details;
