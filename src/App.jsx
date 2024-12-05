import React from "react";
import "./App.css";
import PriceCard from "./PriceCard";

function App() {
  return (
    <div className="App">
      <h1>Our Pricing Plans</h1>
      <div className="pricing-container">
        <PriceCard 
          title="Basic" 
          price="$10.99" 
          features={["Feature 1", "Feature 2", "Feature 3"]}
          buttonText="Add to Cart"
          background="#0084ff"
        />
        <PriceCard 
          title="Premium" 
          price="$20.99" 
          features={["Feature A", "Feature B", "Feature C"]}
          buttonText="Add to Cart"
          background="#6c00a3"
        />
        <PriceCard 
          title="Golden" 
          price="$30.99" 
          features={["Premium Feature 1", "Premium Feature 2", "Premium Feature 3"]}
          buttonText="Add to Cart"
          background="#ff9900"
        />
      </div>
    </div>
  );
}

export default App;
