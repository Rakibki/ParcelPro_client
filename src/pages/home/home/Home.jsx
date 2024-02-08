import Banner from "../banner/Banner";
import TopDeveveryMan from "../TopDeveveryMan/TopDeveveryMan";
import Count from "../counter/Count";
import About from "../about/About";
import Brands from "../brands/Brands";
import Services from "../services/Services";
// import Explance from "../expreace/Explance";
import Choose from "../choose/Choose";
import Solution from "../solution/Solution";
import Experts from "../experts/Experts";
import OurTeam from "../ourTeam/OurTeam";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Explance /> */}
      <Choose />
      <Services />
      <Solution />
      <Count />
      <Experts />
      <OurTeam />
      <About />
      <TopDeveveryMan />
      <Brands />
    </div>
  );
};

export default Home;
