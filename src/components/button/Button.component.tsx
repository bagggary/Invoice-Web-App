const Button = ({ text, type }: { text: string; type: string }) => {
  const ButtonStyle = {
    primary: " bg-primary hover:bg-secondry text-white",
    danger: "bg-[#EC5757] hover:bg-red-light text-white",
    secondry:
      "bg-white dark:hover:bg-white hover:bg-gray-light  dark:bg-blue-light text-torko dark:text-dark",
    draft: "bg-draft text-dark-gray  hover:bg-black-1 dark:text-gray-light",
  };

  return (
    <button
      className={` px-6 py-4 ${ButtonStyle[type]} rounded-3xl font-bold text-sm outline-none`}
    >
      {text}
    </button>
  );
};

export default Button;
