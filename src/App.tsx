import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { SelectedPage } from "@/shared/types";
import Benefits from "./components/Benefits/Benefits";
import OurClasses from "./components/OurClasses/OurClasses";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
   const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.Home
   );
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
         }
         if (window.scrollY !== 0) setIsTopOfPage(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className="App bg-gray-20">
         <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
         />
         <Home setSelectedPage={setSelectedPage} />
         <Benefits setSelectedPage={setSelectedPage} />
         <OurClasses setSelectedPage={setSelectedPage} />
         <ContactUs setSelectedPage={setSelectedPage} />
         <Footer />
      </div>
   );
};

export default App;
