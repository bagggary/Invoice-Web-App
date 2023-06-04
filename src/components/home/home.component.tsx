import Header from "../header/header.component";
import Invoices from "../invoices/invoices.component";

const Home = () => {
  return (
    <main className="md:mt-[72px]  container md:w-[730px] w-[672px] mt-14 mx-auto">
      <Header />
      <Invoices />
    </main>
  );
};

export default Home;
