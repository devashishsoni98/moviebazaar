import Footer from "../common/footer";
import "./HomePage.css";
import Header from "../common/header";
import ActionAreaCard from "./Cards/card";

       const HomePage = () => {
  return (
    <div className="body">
      <Header />
      <main>
        <h1 className="heading-one">Featured Movies</h1>
        <img
          src="https://cdn.pixabay.com/photo/2019/02/10/09/51/photographer-3986846_1280.jpg"
          className="imgg" alt="banner"
        />
        <div>
          <div className="d" style={{ flexGrow: "1", display:"flex", justifyContent:"space-evenly", marginTop:"3%" }}>
            <ActionAreaCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
