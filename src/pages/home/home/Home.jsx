import Banner from "../banner/Banner";
import TopDeveveryMan from "../TopDeveveryMan/TopDeveveryMan";
import Count from "../counter/Count";
import About from "../about/About";
import Brands from "../brands/Brands";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <TopDeveveryMan />
      <Count />
      <Brands />
    </div>
  );
};

export default Home;
