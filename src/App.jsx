import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data dari API");
        return res.json();
      })
      .then((data) => {
        
        // Reduce price to 20%
        const reducedPrices = data.map((product) => ({
          ...product,
          price: product.price * 0.2,
        }));

        // Filter rating > 4.0
        const filtered = reducedPrices.filter(
          (product) => product.rating.rate > 4.0
        );

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="app">
      <h1>FakeStore API Task</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
