
import { useEffect, useState } from 'react';
import { OfferCard } from '../../components/OfferCard/OfferCard'
import { ProductList } from "../../components/ProductList/ProductList";
import "./HomePage.css";
import { useProductList } from '../../services/useProductList';

export const HomePage = () => {
 const { products } = useProductList()

  return (
    <>
      <section className="product-list">
        <div className="container">
          <div className="topo-product-list">
            <h3>Produtos em alta</h3>
            <a href="/produtos">Ver todos →</a>
          </div>
          <div className="product-card-list">
            <ProductList products={ products } />
          </div>
        </div>
      </section>
      <OfferCard />
    </>
  );
};
