import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import PageRoute from "./components/pages/PageRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <PageRoute />
      <Footer />
    </div>
     
  );
}

export default App;
