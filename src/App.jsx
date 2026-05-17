import { useState } from "react";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList ? (
        <div>
          <h1>Paradise Nursery</h1>
          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <h2>Product List</h2>
          {/* your products here */}
        </div>
      )}
    </div>
  );
}

export default App;
