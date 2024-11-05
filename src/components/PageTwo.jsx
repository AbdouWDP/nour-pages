import Footer from "./Footer";
import Navbar from "./Navbar";
import PtBottomContent from "./Page Two/ptBottomContent";
import PtUpperContent from "./Page Two/PtUpperContent";

function PageTwo() {
  return (
    <>
      <Navbar />
      <main className="w-[90%] h-[calc(100vh-18rem)] mx-auto text-lg max-md:text-base">
        <PtUpperContent />
        <PtBottomContent />
      </main>
      <Footer />
    </>
  );
}

export default PageTwo;
