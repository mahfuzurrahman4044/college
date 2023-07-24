import Best from "./Best/Best";
import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Review from "./Review/Review";
import Search from "./Search/Search";

const Home = () => {
  return (
    <div>
      <Search></Search>
      <Best></Best>
      <Gallery></Gallery>
      <Research></Research>
      <Review></Review>
    </div>
  );
};

export default Home;
