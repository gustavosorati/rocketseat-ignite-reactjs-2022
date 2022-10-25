import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { BtnClose, CartContainer, Content, Footer, Product } from "./styles";

export function Cart() {
  const {productsList, changeStatusBag, bagIsOpen, deleteProduct} = useContext(CartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function handleOpenCart() {
    changeStatusBag();
  }

  async function handleDeleteProduct(id: string) {
    await deleteProduct(id);
  }

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const bag = productsList.map(product => {
        return {
          price: product.defaultPriceId,
          quantity: product.quantity
        }
      });

      const response = await axios.post('/api/checkout', bag);

      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.log(error)
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout');
    }
  }

  const quantityProducts = productsList.length;

  const total = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(productsList.reduce((acc, cur) => {
        let priceNumber = Number(cur.price.split("R$")[1].replace(",", "."));

        acc += priceNumber * cur.quantity

        return acc;
      }, 0))

  return (
    <CartContainer isOpen={bagIsOpen}>
      <BtnClose onClick={handleOpenCart}>
        <X size={32} weight="bold" color="#8D8D99" />
      </BtnClose>

      <strong>Sacola de Compras</strong>

      <Content>
        {productsList.map(product => (
          <Product key={product.id}>
            <div className="left">
              <Image src={product.imageUrl} width={101} height={93} alt="" />
            </div>

            <div className="right">
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <button onClick={() => handleDeleteProduct(product.id)} disabled={isCreatingCheckoutSession}>
                Remover
              </button>
            </div>
          </Product>
        ))}
      </Content>

      <Footer>
        <div className="total">
          <p>Quantidade</p>
          <span>{quantityProducts} items</span>
        </div>

        <div className="total" style={{fontWeight: 'bold'}}>
          <strong>Valor Total</strong>
          <span>{total}</span>
        </div>

        <button onClick={handleCheckout}>Finalizar Compra</button>
      </Footer>
    </CartContainer>
  )
}
