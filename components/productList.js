import ProductCard from "@/components/productCard";

const ProductsList = () => {
  const products = [
    {
      productId: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 9.99,
      image: "product1.jpg",
    },
    {
      productId: 2,
      name: "Product 2",
      description: "Description of Product 2",
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
