const Items = ({ item }: any) => {
  return (
    <div className="flex  justify-between ">
      <div className=" w-[60%] font-bold text-sm text-black-1  dark:text-white">
        <div className="font-bold text-sm text-black-1 dark:text-white">
          {item.name}
        </div>
        <div className="font-bold sm:hidden text-sm mt-2 text-torko dark:text-dark-gray">{`${
          item.quantity
        } X £${item.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</div>
      </div>
      <div className="text-left hidden sm:block font-bold text-sm text-black-1 dark:text-white">
        {item.quantity}
      </div>
      <div className="font-bold hidden sm:block text-sm text-black-1 dark:text-white">
        £
        {item.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="font-bold text-sm text-black-1 self-center sm: dark:text-white">
        £
        {item.total.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
};

export default Items;
