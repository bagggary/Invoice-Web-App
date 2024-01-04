export default function DetailsLoadingSkeleton() {
  return (
    <div className="  relative bg-light-BG dark:bg-black min-h-screen py-4 w-clamp mx-auto pt-24 md:pt-16  animate-pulse">
      <p className="h-4 bg-[#F1F5F9] w-1/4 mb-4"></p>

      <div className="w-full bg-white dark:bg-blue-dark h-16 mt-8 rounded-lg flex justify-between px-8"></div>

      <div className="w-full bg-white dark:bg-blue-dark mt-6 rounded-lg p-12">
        <div className="flex sm:justify-between gap-[30px] sm:gap-0 sm:flex-row flex-col">
          <div className="flex gap-2 flex-col">
            <p className="h-8 bg-[#F1F5F9] w-1/2 mb-2"></p>
            <p className="h-4 bg-[#F1F5F9] w-3/4"></p>
          </div>

          <div className="flex flex-col gap-[2px] sm:text-right text-left">
            <p className="h-4 bg-[#F1F5F9] w-2/3 mb-2"></p>
            <p className="h-4 bg-[#F1F5F9] w-3/4 mb-2"></p>
            <p className="h-4 bg-[#F1F5F9] w-1/2 mb-2"></p>
            <p className="h-4 bg-[#F1F5F9] w-2/3"></p>
          </div>
        </div>

        <div className="flex items-start sm:flex-row flex-col gap-8 sm:gap-0 sm:justify-between mt-6">
          <div className="flex items-center justify-between w-full sm:w-[60%]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <p className="h-4 bg-[#F1F5F9] w-1/2 mb-2"></p>
                <p className="h-6 bg-[#F1F5F9] w-2/3"></p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="h-4 bg-[#F1F5F9] w-1/2 mb-2"></p>
                <p className="h-6 bg-[#F1F5F9] w-2/3"></p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="h-4 bg-[#F1F5F9] w-1/3 mb-2"></p>
              <p className="h-6 bg-[#F1F5F9] w-2/3"></p>
              <div className="flex flex-col gap-[2px] text-left">
                <p className="h-4 bg-[#F1F5F9] w-2/3 mb-1"></p>
                <p className="h-4 bg-[#F1F5F9] w-2/3 mb-1"></p>
                <p className="h-4 bg-[#F1F5F9] w-2/3 mb-1"></p>
                <p className="h-4 bg-[#F1F5F9] w-2/3"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-start">
            <p className="h-4 bg-[#F1F5F9] w-1/3 mb-1"></p>
            <p className="h-6 bg-[#F1F5F9] w-2/3"></p>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-blue-light rounded-t-lg mt-8">
          <div className="sm:flex items-center justify-between hidden">
            <div className="h-4 bg-[#F1F5F9] w-1/2"></div>
            <div className="h-4 bg-[#F1F5F9] w-1/4"></div>
            <div className="h-4 bg-[#F1F5F9] w-1/4"></div>
            <div className="h-4 bg-[#F1F5F9] w-1/4"></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-8 bg-draft text-white dark:bg-black-1 rounded-b-lg">
          <div className="h-4 bg-[#F1F5F9] w-1/4"></div>
          <div className="h-6 bg-[#F1F5F9] w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
