import { Product } from "../../sanity.types";

interface ProductsViewProps {
  products: Product[];
}

const ProductsView: React.FC<ProductsViewProps> = ({ products }) => {
  return <div>Products</div>;
};

export default ProductsView;
