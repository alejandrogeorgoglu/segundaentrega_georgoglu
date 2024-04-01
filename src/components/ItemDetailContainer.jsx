import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([null]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filteredData = data.find((d) => d.id === Number(id));
      setProduct(filteredData);
    });
  }, [id]);

  if (!product) return null;

  return (
    <div className="ITC">
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
      <div>{product.description}</div>
      <div>
        <img src={product.pintureUrl} alt={product.title} />
      </div>
    </div>
  );
};
