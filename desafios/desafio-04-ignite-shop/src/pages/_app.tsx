import type { AppProps } from 'next/app'
import Image from 'next/future/image';

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';
import { BtnCart } from '../components/BtnCart';
import { CartProvider } from '../context/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <BtnCart typeButton="cart" />
      </Header>

      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}

