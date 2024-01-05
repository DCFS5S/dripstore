import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import "./MyAccount.css";

export const MyAccount = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('meus-pedidos/meu-perfil')
  }, [navigate])

  return (
    <>
      <div className="account-test">
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
