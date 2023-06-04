import downarrow from "../../assets/icon-arrow-down.svg";
import plusicon from "../../assets/icon-plus.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className=" text-[32px] font-bold">invoices</h1>
        <p className="text-xs font-medium">No Invoices </p>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-4 items-center">
          <div className="text-xs font-bold">Filter by status</div>
          <img src={downarrow} alt="downarrow" />
        </div>
        <div className="flex bg-primary rounded-3xl pl-2 text-white items-center  gap-4 w-[150px] h-12 text-xs font-bold ">
          <div className=" h-8 w-8  bg-white  flex justify-center items-center rounded-full ">
            <img src={plusicon} alt="plusicon" />
          </div>
          New Invoice
        </div>
      </div>
    </div>
  );
};

export default Header;
