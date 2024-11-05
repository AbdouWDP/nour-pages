import React from "react";
import Navbar from "./Navbar";
import UpperContent from "./Page One/UpperContent";
import MiddleContent from "./Page One/MiddleCOntent";
import BottomContent from "./Page One/BottomContent";
import Footer from "./Footer";

function PageOne() {
  return (
    <>
      <Navbar />
      <main className="w-[90%] mx-auto text-lg max-md:text-base">
        <UpperContent />
        <MiddleContent />
        <BottomContent />
      </main>
      <Footer />
    </>
  );
}

export default PageOne;
