import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/global';

import { HeaderComponent } from '../components/HeaderComponent';
import { CartProvider } from '../context/CartContext';
import { Container } from '../styles/pages/app';

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

