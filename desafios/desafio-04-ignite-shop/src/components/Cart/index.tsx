import Image from "next/image";
import { X } from "phosphor-react";
import { IProduct } from "../../context/CartContext";
import { BtnClose, CartContainer, Content, Footer, Product } from "./styles";

interface CartProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export function Cart({products}: CartProps) {


  function handleAddProductToCart(product: IProduct) {

  }


  return (
    <CartContainer>
      <BtnClose>
        <X size={32} weight="bold" color="#8D8D99" />
      </BtnClose>

      <strong>Sacola de Compras</strong>

      <Content>
        {products.map(product => (
          <Product key={product.id}>
            <div className="left">
              <Image src={product.imageUrl} width={101} height={93} alt="" />
            </div>

            <div className="right">
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <button>Remover</button>
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

            <button>Finalizar Compra</button>
          </Footer>
      </Content>
    </CartContainer>
  )
}
