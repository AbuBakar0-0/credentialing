import Footer from "./components/Footer";
import Header from "./components/Header";
import Clients from "./components/Home/Clients";
import Hero from "./components/Home/Hero";
import ImportantFeatures from "./components/Home/ImportantFeatures";
import Introducing from "./components/Home/Introducing";
import Software from "./components/Home/Software";
import WhyCMS from "./components/Home/WhyCMS";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto flex flex-col justify-center items-center gap-5 p-10">
        <Introducing />
        <ImportantFeatures />
        <WhyCMS />
        <Software />
        <Clients />
      </div>
      <Footer />
    </>
  );
}
