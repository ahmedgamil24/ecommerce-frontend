import { Camera } from "lucide-react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
      <Hero />
      <FeaturedCategories />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
