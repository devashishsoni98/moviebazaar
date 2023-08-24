import Footer from "../common/footer";
import "./HomePage.css";
// import MultiActionAreaCard from "./Cards/card";
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
          <div style={{ flexGrow: "1" }}>
            <ActionAreaCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
