import { Camera } from "lucide-react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import FeaturedCategories from "./components/FeaturedCategories";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
      <FeaturedCategories />
    </>
  );
}

export default App;
