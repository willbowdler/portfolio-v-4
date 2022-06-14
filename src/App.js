// Dependency Imports

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Regular Components

import NavBar from "./components/universal/NavBar";
import Footer from "./components/universal/Footer";

import Hero from "./components/pages/HomepageComponents/Hero";
import AboutMeMini from "./components/pages/HomepageComponents/AboutMeMini";
import MyProjectsMini from "./components/pages/HomepageComponents/MyProjectsMini";

// Page Components

import AboutMePage from "./components/pages/AboutMeComponents/AboutMePage";
import GospelPage from "./components/pages/GospelComponents/GospelPage";
import MyProjectsPage from "./components/pages/MyProjectsComponents/MyProjectsPage";
import ContactMePage from "./components/pages/ContactMeComponents/ContactMePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <AboutMeMini />
              <MyProjectsMini />
            </>
          }
        ></Route>
        <Route exact path="/aboutme" element={<AboutMePage />}></Route>
        <Route exact path="/myprojects" element={<MyProjectsPage />}></Route>
        <Route exact path="/contactme" element={<ContactMePage />}></Route>
        <Route exact path="/gospel" element={<GospelPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
