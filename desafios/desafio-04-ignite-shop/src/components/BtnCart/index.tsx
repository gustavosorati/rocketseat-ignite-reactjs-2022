import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BtnCartContainer, Wrapper } from "./styles";

type IBtnCart = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton: "cart" | "button"
}

export function BtnCart({typeButton, ...props}: IBtnCart) {
  const { productsList } = useContext(CartContext);


  return (
    <BtnCartContainer typeButton={typeButton} {...props}>
      {typeButton === "cart" ? (
        <Wrapper>
          {productsList.length > 0 && <span>{productsList.length}</span>}
          <Handbag weight='bold' size={24} color={"#8D8D99"} />
        </Wrapper>
      ) : (
        <Wrapper>
          <Handbag weight='bold' size={24} color={"#8D8D99"} />
        </Wrapper>
      )}
    </BtnCartContainer>
  )
}
