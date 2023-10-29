import React, { useState } from "react";
import About from "./component/About";
import Blog from "./component/Blog";
import Footer from "./component/Footer/Footer";
import SubFooter from "./component/Footer/subFooter";
import Header from "./component/Header";
import Home from "./component/Home";
import MobileLink from "./component/Link/MobileLink";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Testimony from "./component/Testimony";

function App() {
  const [mobileLink, setMobileLink] = useState(false);
  return (
    <section className="overflow-x-hidden">
      <Header />
      <Navbar MobileLink={setMobileLink} />
      <div
        className={`${
          mobileLink ? "-right-0" : "-right-full"
        } fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500`}
      >
        <MobileLink MobileLink={setMobileLink} />
      </div>
      <Home />
      <Service />
      <About />
      <Testimony />
      <Blog />
      <SubFooter />
      <Footer />
    </section>
  );
}

export default App;
