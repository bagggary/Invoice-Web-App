import { useDispatch, useSelector } from "react-redux";
import plusicon from "../../assets/icon-plus.svg";
import { setNewForm } from "../../store/switch/switch.action";
import StatusDropdown from "../statusDropdown/statusDropdown.component";
import { selectInvoicesData } from "../../store/invoice/invoice.selector";

const Header = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector(selectInvoicesData);
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className=" text-[20px] tracking-[-1px]  sm:text-[32px] font-bold dark:text-white">
          Invoices
        </h1>
        <p className="text-sm font-medium text-dark-gray dark:text-gray-light">
          {invoiceData.length > 0
            ? `There are ${invoiceData.length} total invoices`
            : `No invoices`}
        </p>
      </div>
      <div className="flex gap-10">
        <StatusDropdown />
        <div
          onClick={() => dispatch(setNewForm(true))}
          className="flex bg-primary rounded-3xl hover:bg-secondry cursor-pointer duration-200 transition-all pl-[6px] pr sm:pl-2 text-white items-center w-[90px] h-10 gap-2  sm:gap-4 sm:w-[150px] sm:h-12 text-sm font-bold "
        >
          <div className=" h-8 w-8  bg-white  flex justify-center items-center rounded-full ">
            <img src={plusicon} alt="plusicon" />
          </div>
          <p className="sm:block hidden">New Invoice</p>
          <p className="block sm:hidden py-[15px] pr-[14px]">New</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
