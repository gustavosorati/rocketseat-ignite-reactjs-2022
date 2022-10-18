import type { GetStaticProps } from 'next'
import Image from 'next/future/image'
import { HomeContainer, Product, Footer, FooterLeft } from '../styles/pages/home'

import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { BtnCart } from '../components/BtnCart'
import { useContext } from 'react'
import { CartContext, IProduct } from '../context/CartContext'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export function Home({products}: HomeProps) {
  const {addProduct} = useContext(CartContext);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  function handleAddProductToCart(product: IProduct) {
    addProduct(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => (
          <Product className='keen-slider__slide' key={product.id}>
            <Link href={`/product/${product.id}`}  prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>

              <Footer>
                <FooterLeft>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </FooterLeft>

                <BtnCart
                  typeButton="button"
                  onClick={() => handleAddProductToCart(product)}
                  />
              </Footer>
          </Product>
        ))}

      </HomeContainer>

      {/* <Cart products={products}  /> */}
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
