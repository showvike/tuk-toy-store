import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Custom from "./Custom/Custom";
import Gallery from "./Gallery/Gallery";
import Upload from "./Upload/Upload";
AOS.init();

function Home() {
  return (
    <div data-aos="fade-up">
      <div className="divider mb-12"></div>
      <Banner />
      <div className="divider mt-12"></div>
      <Gallery />
      <div className="divider mt-12"></div>
      <Category />
      <div className="divider mt-12"></div>
      <Upload />
      <div className="divider mt-12"></div>
      <Custom />
      <div className="divider mt-12"></div>
    </div>
  );
}

export default Home;
