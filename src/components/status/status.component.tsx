type StatusProps = {
  status: string;
};

// this component looks messy , but it work this way only , suggest any solution :) ;
const Status = ({ status }: StatusProps) => {
  const statusType = {
    paid: "text-center dark:bg-paid  flex items-center  rounded-md dark:bg-opacity-[5.71%] font-bold text-sm ml-[2rem] w-[104px] h-10 justify-center text-paid gap-2",
    pending:
      "text-center flex items-center dark:bg-pending font-bold rounded-md dark:bg-opacity-[5.71%] text-sm ml-[2rem] w-[104px] h-10 justify-center text-pending gap-2",
    draft:
      "text-center flex items-center dark:bg-[#DFE3FA] rounded-md font-bold text-sm ml-[2rem]  dark:bg-opacity-[5.71%] w-[104px] dark:text-gray-light h-10 justify-center text-draft gap-2",
  };
  const statusColor = {
    paid: "w-2 h-2 rounded-full bg-paid",
    pending: "w-2 h-2 rounded-full bg-pending",
    draft: "w-2 h-2 rounded-full bg-draft dark:bg-gray-light",
  };
  return (
    <div className={statusType[status]}>
      <div className={statusColor[status]}></div>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default Status;
