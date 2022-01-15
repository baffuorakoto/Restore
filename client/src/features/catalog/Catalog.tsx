import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

import { Product } from "../../app/models/product";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
