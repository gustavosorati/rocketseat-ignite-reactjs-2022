import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { useContext, useState } from 'react'
import Stripe from 'stripe'
import { ShoppingButton } from '../components/ShoppingButton'
import { CartContext, IProduct } from '../context/CartContext'
import { stripe } from '../lib/stripe'
import { Footer, FooterLeft, HomeContainer, Product, SliderControl } from '../styles/pages/home'

interface HomeProps {
  products: IProduct[];
}

export function Home({products}: HomeProps) {
  const {addProduct} = useContext(CartContext);

  // slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: "free-snap",
    drag: true,
    slides: {
      origin: currentSlide === 0 ? "auto" : "center",
      // origin: "center",
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

  async function handleAddProductToCart(product: IProduct) {
    await addProduct(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map((product, index) => {
          return (
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

                <ShoppingButton
                  typeButton="button"
                  onClick={() => handleAddProductToCart(product)}
                />
              </Footer>

            </Product>
        )})}

        {/* Arrows to control slide */}
        {loaded && (
          <>
            <SliderControl
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              left={false}
            >
              <button onClick={(e: any) => {e.stopPropagation() || instanceRef.current?.next()}}>
                <CaretRight size={48} weight={'regular'} color={"#c4c4cc"}/>
              </button>
            </SliderControl>

            <SliderControl
              disabled={currentSlide === 0}
              left={true}
            >
              <button onClick={(e: any) => {e.stopPropagation() || instanceRef.current?.prev()}}>
                <CaretRight size={48} weight={'regular'} color={"#c4c4cc"} />
              </button>
            </SliderControl>
          </>
        )}
      </HomeContainer>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Fetch dos produtos, expandindo e buscando informações das informações de pagamento
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {

    // Tipagem
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency'
      }).format(price.unit_amount! / 100),

      // Recebe o id padrão do price, pois a finalização da compra irá ocorrer
      // apenas durante o component Cart com os produtos que estão armazenados no contexto.
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
