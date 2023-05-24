import React from "react";
import reviews from "./data";
import { Testiminials } from "./Components/Testiminials";

const App = () => {
  return (
  <div className="App">
    <h1 className="main-header">Our Testimonials</h1>
    <div/>
    <Testiminials reviews={reviews}/>
  </div>);
};

export default App;
