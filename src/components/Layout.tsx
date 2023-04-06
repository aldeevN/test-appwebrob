import { FC, ReactNode } from "react";
import Home from "../pages";
import Footer from "./Footer";
import Navbar from "./Navbar";

type layoutProps = {
  children: ReactNode,
}

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;