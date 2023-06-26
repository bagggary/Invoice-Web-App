const Input = () => {
  <div className="flex flex-col gap-[10px]">
    <label htmlFor="st-add" className="font-medium text-sm text-torko">
      Street Address
    </label>
    <input
      type="text"
      id="st-add"
      className="h-12  border border-gray-light  py-4 px-5"
    />
  </div>;
};

export default Input;
