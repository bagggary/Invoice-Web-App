import Button from "../button/Button.component";
type DeleteType = {
  visibility: () => void;
};

export default function Delete({
  visibility,
  setVisibility,
  id,
  handleDeletion,
}) {
  return (
    <div
      className={` ${
        visibility ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog `}
    >
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-12 fixed inset-x-0 bottom-0 z-50  md:relative shadow-lg dark:bg-blue-dark">
          <div className="md:flex items-center">
            <div className="mt-4 md:mt-0 md:ml-6 text-left md:text-left">
              <p className="text-black-1 text-2xl font-bold dark:text-white ">
                confirm Deletion
              </p>
              <p className="text-sm text-dark-gray mt-3 dark:text-gray-light">
                {` Are you sure you want to delete invoice #${id}? This action
                cannot be undone.`}
              </p>
            </div>
          </div>
          <div className="text-center md:text-right gap-2 mt-4 md:flex md:justify-end">
            <Button
              text="cancel"
              type="secondry"
              handleChange={() => setVisibility.off()}
            />
            <Button text="Delete" type="danger" handleChange={handleDeletion} />
          </div>
        </div>
      </div>
    </div>
  );
}
