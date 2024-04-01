import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      if (id) {
        const filteredData = data.filter((d) => d.category === id);
        setProducts(filteredData);
      } else {
        setProducts(data);
      }
    });
  }, [id]);

  return (
    <div className="ITC">
      <ItemList products={products} />
    </div>
  );
};
