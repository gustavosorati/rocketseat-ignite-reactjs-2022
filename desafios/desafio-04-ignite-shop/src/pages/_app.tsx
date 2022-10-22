import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/global';

import { Layout } from '../components/Layout';
import { CartProvider } from '../context/CartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

