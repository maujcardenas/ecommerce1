import ProductCard from "@/components/productCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        const productsData = response.data.data;
        console.log(productsData);
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // const products = [
  //   {
  //     productId: 1,
  //     name: "Jugo Natural Mango",
  //     description: "700 ML",
  //     price: 9.99,
  //     image: "product1.jpg",
  //   },
  //   {
  //     productId: 2,
  //     name: "Jugo Natural Naranja",
  //     description: "1000 ML",
  //     price: 19.99,
  //     image: "product2.jpg",
  //   },
  // ];

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            name: product.attributes.name,
            description:
              product.attributes.product_category.data.attributes.categoryName,
            price: product.attributes.price,
            image: product.attributes.productImage.data.attributes.url,
            productId: product.id,
          }}
        />
      ))}
    </div>
  );
};

export default ProductsList;
