
import { OfferCard } from '../../components/OfferCard/OfferCard'
import { ProductList } from "../../components/ProductList/ProductList";
import productsData from "../../../products.json"
import "./HomePage.css";
import { MainFooter } from '../../components/MainFooter/MainFooter';
import { Header } from '../../components/Header/Header';

export const HomePage = () => {
  return (
    <>
<Header />
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
      <OfferCard />
      <MainFooter />
    </>
  );
};
