import ProductCard from "./ProductCard";

function ProductListing({ products }) {
  return (
    <div className="product-listing-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
            ></ProductCard>
          ))
        ) : (
          <p className="produc-listings-empty">No Products Found</p>
        )}
        ;
      </div>
    </div>
  );
}

export default ProductListing;
