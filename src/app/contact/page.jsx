import Contact from "@/components/Contact/Contact";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer"
import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
export default function Page() {
  return (
    <Suspense fallback={<Loading/>}>
      <NavBar/>
      <Contact/>
      <Footer/>
    </Suspense>
  );
}