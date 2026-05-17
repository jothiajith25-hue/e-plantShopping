import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plantsData = [
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 10,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 12,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Aloe Vera",
        price: 8,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Spider Plant",
        price: 9,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "ZZ Plant",
        price: 11,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Rubber Plant",
        price: 13,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        id: 7,
        name: "Rose",
        price: 15,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 8,
        name: "Tulip",
        price: 14,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 9,
        name: "Sunflower",
        price: 10,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 10,
        name: "Lavender",
        price: 16,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 11,
        name: "Marigold",
        price: 9,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 12,
        name: "Jasmine",
        price: 13,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>

      <h1>Plants Shop</h1>

      {/* ✅ Categories */}
      {plantsData.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {category.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "150px",
                  textAlign: "center",
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{ width: "100%" }}
                />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                {/* ✅ Add to Cart Button */}
                <button onClick={() => handleAddToCart(plant)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
