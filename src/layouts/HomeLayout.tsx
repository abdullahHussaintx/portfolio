import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar";

export const HomeLayout = ({ children }) => {
  return (
    <div className=" container mx-auto  md:p-0 grid min-h-[100dvh]  grid-rows-[auto_1fr_auto]">
      <NavBar />
      <div className=" bg-black px-4">{children}</div>
      <Footer />
    </div>
  );
};
