import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { BtnCartContainer, Wrapper } from "./styles";

type IBtnCart = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeButton: "cart" | "button"
}

export function BtnCart({typeButton, ...props}: IBtnCart) {
  return (
    <BtnCartContainer typeButton={typeButton} {...props}>
      {typeButton === "cart" ? (
        <Wrapper>
          <span>1</span>
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
