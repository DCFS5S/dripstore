<<<<<<< HEAD
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
=======
import { OfferCard } from "../../components/OfferCard"
import { CartCheckList } from "../../components/CartCheckList/CartCheckList"

export function HomePage() {
    return (
      <>
        <OfferCard />
        <CartCheckList name="Tênis Nike Revolution 6 Next Nature Masculino" color="Vermelho / Branco" size="42" price="219,00" oldPrice="219,00"/>
      </>
    )
  }
  
>>>>>>> origin/main
