import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Listings from "./pages/Listings";
import Additional from "./pages/About/Additional";
import AboutLayout from "./components/AboutLayout";
import Owner from "./pages/About/Owner";
import FAQ from "./pages/About/FAQ";
import Tenants from "./pages/About/Tenants";
import AddListing from "./pages/AddListing";
import Listing from "./pages/Listing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index path="about-us" element={<About />} />
            <Route path="additional" element={<Additional />} />
            <Route path="owner" element={<Owner />} />
            <Route path="tenants" element={<Tenants />} />
            <Route path="faq" element={<FAQ />} />
            <Route index element={<About />} />
          </Route>

          <Route path="listings" element={<Listings />} />
          <Route path="listing/:id" element={<Listing />} />
          <Route path="add-listing" element={<AddListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
