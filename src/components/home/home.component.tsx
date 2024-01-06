import NewForm from "../forms/newForm.component";
import Header from "../header/header.component";
import Invoices from "../invoices/invoices.component";

const Home = () => {
  return (
    <main className="w-[90%] min-h-screen  pb-14 pt-[9rem] md:pt-[72px] md:pl-[5rem] lg:pl-0 md:w-[730px]  py-14  mx-auto  ">
      <Header />
      <Invoices />
      <NewForm />
    </main>
  );
};

export default Home;
