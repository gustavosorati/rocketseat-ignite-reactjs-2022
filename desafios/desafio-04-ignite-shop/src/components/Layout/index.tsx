import { Cart } from "../Cart";
import { Header } from "../Header";
import { LayoutContainer } from "./styles";


export function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}

      <Cart />
    </LayoutContainer>
  )
}
