import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import "./MyAccount.css";

export const MyAccount = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('meus-pedidos/meu-perfil')
  }, [navigate])

  return (
    <>
      <div>
        <Header />
        <section className="account-container">
          <Sidebar />

          <div className="account-content">
            <Outlet />
          </div>

        </section>
      </div>
    </>
  );
};
