import { Link, useParams } from "react-router-dom";
import backArrow from "../../assets/icon-arrow-left.svg";
import Status from "../../components/status/status.component";
import Button from "../../components/Button.component";
import { useSelector } from "react-redux";
import { selectInvoicesData } from "../../store/invoice/invoice.selector";
import Items from "../../components/items/items.component";

const Details = () => {
  const { Id } = useParams();
  const { Data } = useSelector(selectInvoicesData);
  const invoiceData = Data?.filter((invoice) => {
    return invoice.id === Id;
  });

  const {
    id,
    description,
    clientAddress,
    createdAt,
    paymentDue,
    senderAddress,
    clientEmail,
    clientName,
    status,
    items,
    total,
  } = invoiceData[0];
  const { city, country, postCode, street } = senderAddress;

  console.log(items);

  return (
    <div className="md:pt-[72px] w-[90%]  md:pr-[5rem] md:min-w-[730px] md:pl-[5rem] lg:pl-0 md:w-[730px] py-14  mx-auto">
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
          <Status status={status} />
        </div>
        <div className=" fixed bottom-0 bg-red-light sm:bg-transparent  sm:static sm: flex items-center">
          <div className="flex items-center gap-2">
            <Button text="Edit" type="secondry" />
            <Button text="Delete" type="danger" />
            <Button text="Mark as Paid" type="primary" />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="w-full bg-white dark:bg-blue-dark mt-6 rounded-lg p-12">
        <div className="flex justify-between ">
          <div className="flex gap-2 flex-col">
            <p className="font-bold text-lg text-black-1 dark:text-white">
              <span className=" text-dark-gray">#</span>
              {id}
            </p>
            <p className="font-medium text-sm text-torko dark:text-gray-light">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-[2px] text-right">
            <p className="font-medium text-xs text-torko dark:text-gray-light">
              {street}
            </p>
            <p className="font-medium text-xs text-torko dark:text-gray-light">
              {city}
            </p>
            <p className="font-medium text-xs text-torko dark:text-gray-light">
              {postCode}
            </p>
            <p className="font-medium text-xs text-torko dark:text-gray-light">
              {country}
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="flex items-start justify-between mt-6">
          {/* this container contain two group  */}
          <div className="flex items-center justify-between w-[60%]">
            {/* group one  */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <p className="font-medium text-sm text-torko dark:text-gray-light">
                  Invoice Date
                </p>
                <p className="font-bold text-base text-black-1 dark:text-white ">
                  {createdAt}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium text-sm text-torko dark:text-gray-light">
                  Payment Due
                </p>
                <p className="font-bold text-base text-black-1 dark:text-white ">
                  {paymentDue}
                </p>
              </div>
            </div>
            {/* group two  */}
            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm text-torko dark:text-gray-light">
                Bill To
              </p>
              <p className="font-bold text-base text-black-1 dark:text-white">
                {clientName}
              </p>
              <div className="flex flex-col gap[2px] text-left">
                <p className="font-medium text-xs text-torko dark:text-gray-light">
                  {clientAddress.street}
                </p>
                <p className="font-medium text-xs text-torko dark:text-gray-light">
                  {clientAddress.city}
                </p>
                <p className="font-medium text-xs text-torko dark:text-gray-light">
                  {clientAddress.postCode}
                </p>
                <p className="font-medium text-xs text-torko dark:text-gray-light">
                  {clientAddress.country}
                </p>
              </div>
            </div>
          </div>
          {/* email send conainer  */}

          <div className="flex flex-col gap-3 self-start">
            <p className="font-medium text-xs text-torko dark:text-gray-light">
              Sent to
            </p>
            <p className="font-bold text-base text-black-1 dark:text-white">
              {clientEmail}
            </p>
          </div>
        </div>
        {/* invoices data table continaer */}
        {/* data discription rows and columns */}
        <div className=" p-8 bg-white dark:bg-blue-light rounded-t-lg mt-8">
          <div className="flex items-center justify-between ">
            <div className="w-[50%] font-medium text-xs text-torko dark:text-gray-light">
              Item Name
            </div>
            <div className="font-medium text-xs text-torko dark:text-gray-light">
              QTY.
            </div>
            <div className=" font-medium text-xs text-torko dark:text-gray-light">
              Price
            </div>
            <div className="font-medium text-xs text-torko dark:text-gray-light">
              Total
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            {items.map((item: any, index: any) => {
              return <Items item={item} key={index} />;
            })}
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-draft text-white  dark:bg-black-1 rounded-b-lg">
          <div className="font-medium text-sm">Amount Due</div>
          <div className="font-bold text-2xl">
            £
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
