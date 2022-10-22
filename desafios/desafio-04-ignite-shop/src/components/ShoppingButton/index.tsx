import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BtnCartContainer, Wrapper } from "./styles";

type IBtnCart = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton: "cart" | "button"
}

export function ShoppingButton({typeButton, ...props}: IBtnCart) {
  const { productsList, changeStatusBag } = useContext(CartContext);

  function handleOpenBag() {
    changeStatusBag();
  }

  if(typeButton === "cart") {
    return (
      <BtnCartContainer typeButton="cart" {...props} onClick={handleOpenBag}>
        <Wrapper>
          {productsList.length > 0 && <span>{productsList.length}</span>}
          <Handbag weight='bold' size={24} color={"#8D8D99"} />
        </Wrapper>
      </BtnCartContainer>
    )
  }

  if(typeButton === "button") {
    return (
      <BtnCartContainer typeButton="button" {...props}>
        <Wrapper>
          <Handbag weight='bold' size={24} color={"#8D8D99"} />
        </Wrapper>
      </BtnCartContainer>
    )
  }
}
