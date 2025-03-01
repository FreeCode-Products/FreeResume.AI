import HomePage from "../pages/HomePage";
import "./globals.css";
import MasterPage from "../pages/master-template/MasterPage";

const page = () => {
  return (
    <>
      <MasterPage>
        <HomePage />
      </MasterPage>
    </>
  );
};

export default page;
