import Header from "@/components/header";
import Info from "@/components/info";
import Main from "@/components/main";

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
      <div className="custom-container">
        <Info />
      </div>
    </>
  );
}
