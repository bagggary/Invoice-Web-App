const Items = ({ item }: any) => {
  return (
    <div className="flex  justify-between ">
      <div className=" w-[60%] font-bold text-sm text-black-1 dark:text-white">
        {item.name}
      </div>
      <div className="text-left font-bold text-sm text-black-1 dark:text-white">
        {item.quantity}
      </div>
      <div className="font-bold text-sm text-black-1 dark:text-white">
        £
        {item.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="font-bold text-sm text-black-1 dark:text-white">
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
