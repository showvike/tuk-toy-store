import Custom from "../Custom/Custom";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

function Home() {
  return (
    <div>
      <Banner />
      <Gallery />
      <Category />
      <Custom />
    </div>
  );
}

export default Home;
