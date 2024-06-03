import AboutProduct from "@/components/aboutProduct";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Info from "@/components/info";
import Main from "@/components/main";
import WorldClass from "@/components/worldClass";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="one-screen relative overflow-hidden">
        <div className="bg-secondary h-screen w-full absolute -z-10 top-0 overflow-hidden"></div>
        <div className="custom-container">
          <Header />
          <Main />
        </div>
      </div>
      <Info />
      <AboutProduct />
      <WorldClass />
      <Contact />
    </>
  );
}
