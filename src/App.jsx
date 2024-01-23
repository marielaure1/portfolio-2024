import Nav from "@/components/Html/Layouts/Nav.jsx";
import Footer from "@/components/Html/Layouts/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <Nav/>
          <Outlet/>
      <Footer/>
    </>
  )
}