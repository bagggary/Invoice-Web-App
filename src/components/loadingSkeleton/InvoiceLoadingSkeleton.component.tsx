export default function InvoiceLoadingSkeleton() {
  return (
    <div className="mt-16 flex flex-col gap-4 cursor-wait">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index}>
          <div className="animate-pulse dark:bg-blue-dark bg-white shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.10);] hover:border-solid hover:shadow-none border-transparent  flex flex-col sm:flex-row justify-between sm:items-center pl-8 pr-6 py-6 rounded-lg ">
            <div className="flex justify-between items-center sm:mr-[2em]">
              <div className="text-sm font-bold sm:mr-[1.75rem] dark:text-white text-black-1 ">
                <span className="h-4 bg-[#F1F5F9] w-20 block"></span>
              </div>
              <div className="text-sm text-torko  font-medium text-center sm:ml-auto dark:text-gray-light">
                <span className="h-4 bg-[#F1F5F9] w-16 block"></span>
              </div>
            </div>
            <div className="flex items-center sm:w-[60%] mt-6 sm:mt-0">
              <div className="flex sm:flex-row flex-col justify-between sm:items-center w-full">
                <p className="text-sm inline-block font-medium text-[#858BB2] dark:text-white">
                  <span className="h-4 bg-[#F1F5F9] w-32 block"></span>
                </p>
                <div className="font-bold text-black-1 text-base sm:text-lg dark:text-white">
                  <span className="h-6 bg-[#F1F5F9] w-40 block"></span>
                </div>
              </div>
              <div className="flex self-end items-center ">
                {/* Add additional loading elements here if needed */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
