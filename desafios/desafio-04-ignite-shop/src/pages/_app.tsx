import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app';
import { CartProvider } from '../context/CartContext';
import { HeaderComponent } from '../components/HeaderComponent';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
        <Container>
          <HeaderComponent />

          <Component {...pageProps} />
        </Container>
    </CartProvider>
  )
}

