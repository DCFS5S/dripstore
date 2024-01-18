import { ProductSummary } from "../../components/ProductSummary/ProductSummary"
import "./PurchaseConfirmation.css"



export const PurchaseConfirmation = () => {
    return (
        <div className="red">
            <div className="container">
                <div>
                    <h1>🎉</h1>
                    <h1 className="titulo">Compra Realizada</h1>
                    <h1 className="titulo">com Sucesso!</h1>
                </div>
                <div className="info">
                    <h3>Informações Pessoais</h3>
                    <span>Nome: </span>
                    <span>CPF: </span>
                    <span>Email: </span>
                    <span>Celular: </span>
                </div>
                <div className="info">
                    <h3>Informações de Entrega</h3>
                    <span>Endereço: </span>
                    <span>Bairo: </span>
                    <span>Cidade: </span>
                    <span>CEP: </span>
                </div>
                <div className="info">
                    <h3>Informações de Pagamento</h3>
                    <span>Titular do cartão: </span>
                    <span>Final: </span>
                </div>
                <div>
                    <h3>Resumo da Compra</h3>
                    <ProductSummary />
                </div>
            </div>
        </div>
    )
}