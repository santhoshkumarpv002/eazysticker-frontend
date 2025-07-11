import products from "../data/product.js";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
export function Home() {
  return (
    <>
      <PageHeading title="Explore Eazy Stickers">
        <p className="page-heading-paragraph">
          Discover the perfect stickers to express your personality and add a
          touch of creativity to your space with our wide ran of fun and uniqu
          sticker, perfect for any occastion!
        </p>
      </PageHeading>

      <ProductListing products={products}></ProductListing>
    </>
  );
}
