import { Header } from "../Header";
import { LayoutContainer } from "./styles";


export function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}
