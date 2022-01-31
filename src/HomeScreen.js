import Navbar from "./Navbar";
import Banner from "./Banner";
import "./styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Navbar />

      <Banner />
      {/* <Row /> */}
    </div>
  );
}

export default HomeScreen;
