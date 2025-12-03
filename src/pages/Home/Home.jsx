import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Process from "../../components/Process/Process";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Shop from "../../components/Shop/Shop";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className=" w-full max-w-screen overflow-x-hidden">
      {/* <Header/> */}
      <Hero />
      <Process />
      <ChooseUs />
      <WhoWeAre />
      <Shop />
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
