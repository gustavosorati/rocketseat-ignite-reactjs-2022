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

  function handleDeleteProduct(id: string) {
    deleteProduct(id);
  }

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const bag = productsList.map(product => {
        return {
          price: product.priceId,
          quantity: product.quantity
        }
      });

      const response = await axios.post('/api/checkout', bag);

      console.log(response)
      window.location.href = response.data.checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      console.log(err);
    }
  }

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
              <button onClick={() => handleDeleteProduct(product.id)}>Remover</button>
            </div>
          </Product>
        ))}

        <Footer>
          <div className="total">
            <p>Quantidade</p>
            <span>3 items</span>
          </div>

          <div className="total" style={{fontWeight: 'bold'}}>
            <strong>Valor Total</strong>
            <span>R$ 270,00</span>
          </div>

          <button onClick={handleCheckout}>Finalizar Compra</button>
        </Footer>
      </Content>
    </CartContainer>
  )
}
