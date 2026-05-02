import ProductListingHeader from "../ProductListingHeader/ProductListingHeader";
import { ApiResponse } from "@/types/api";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

function ProductsList({ title, products }:ApiResponse) {
  return (
    <section>
      <ProductListingHeader title={title} />
      <ProductsGrid products={products} />
    </section>
  );
}

export default ProductsList;
