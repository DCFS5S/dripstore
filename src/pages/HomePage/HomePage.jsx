import { ProductList } from "../../components/ProductList/ProductList";
import "./HomePage.css";
import productsData from "../../../products.json"

export const HomePage = () => {
  return (
    <section className="product-list">
      <div className="container">
        <div className="topo-product-list">
          <h3>Produtos em alta</h3>
          <a href="/produtos">Ver todos →</a>
        </div>
        <div className="product-card-list">
          <ProductList products={productsData} />
        </div>
      </div>
    </section>
  );
};
