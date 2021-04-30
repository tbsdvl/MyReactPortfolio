import React from "react";
import Header from "./components/Header";
import PageRoute from "./components/pages/PageRoute";
import Footer from "./components/Footer";

// Render the website in the virtual dom
// with App component

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
