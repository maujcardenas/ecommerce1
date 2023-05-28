import ProductCard from "@/components/productCard";

const ProductsList = () => {
  const products = [
    {
      productId: 1,
      name: "Jugo Natural Mango",
      description: "700 ML",
      price: 9.99,
      image: "product1.jpg",
    },
    {
      productId: 2,
      name: "Jugo Natural Naranja",
      description: "1000 ML",
      price: 19.99,
      image: "product2.jpg",
    },
  ];

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
