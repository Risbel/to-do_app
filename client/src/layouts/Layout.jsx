import { Navbar } from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center mt-8">{children}</div>
      </div>
    </>
  );
};

export default Layout;
