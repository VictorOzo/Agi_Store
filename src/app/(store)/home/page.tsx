import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/component/ProductsView";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <ProductsView products={products} />
    </div>
  );
}
