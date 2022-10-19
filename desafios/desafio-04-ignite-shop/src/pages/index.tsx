import type { GetStaticProps } from 'next'
import Image from 'next/future/image'
import { HomeContainer, Product, Footer, FooterLeft, SliderControl } from '../styles/pages/home'

import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { BtnCart } from '../components/BtnCart'
import { useContext, useState } from 'react'
import { CartContext, IProduct } from '../context/CartContext'
import { CaretRight } from 'phosphor-react'

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

  // slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: "free-snap",
    drag: false,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 48
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
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

        {products.map((product, index) => {

          return (
          <div className="teste" key={product.id}>
            <Product
              className='keen-slider__slide'
              key={product.id}
              isVisible={currentSlide === index}
            >

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
          </div>
        )})}

        {loaded && (
          <>
            <SliderControl
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            left={false}
            >
              <button onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.next()
              }}> <CaretRight size={48} weight={'regular'} color={"#c4c4cc"}/> </button>
            </SliderControl>

            <SliderControl
            disabled={currentSlide === 0}
            left={true}
            >
              <button onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.prev()
              }}> <CaretRight size={48} weight={'regular'} color={"#c4c4cc"} /> </button>
            </SliderControl>
          </>
        )}
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
