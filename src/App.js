// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React from "react";
// import { Container } from "react-bootstrap";
import Header from "./components/HEADER/Header";
import Footer from "./components/FOOTER/Footer";
import Main from "./Pages/MAIN/Main";
import Header2 from "./components/Header2/Header2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Header2 />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
