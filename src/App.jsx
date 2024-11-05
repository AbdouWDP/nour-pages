import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </>
  );
}

export default App;
