import { CartCheckout } from '../../components/CartCheckout/CartCheckout';
import { Header } from '../../components/Header/Header';
import { MainFooter } from '../../components/MainFooter/MainFooter';
import './CartPage.css';

export const CartPage = () => {
  return (
    <>
      <div>
        <Header />
        <CartCheckout />
        <MainFooter />
      </div>
    </>
  );
};
