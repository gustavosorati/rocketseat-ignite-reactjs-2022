import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import { ImageContainer, Products, SuccessContainer } from "../styles/pages/success";

interface SucceessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    price: {
      product: {
        images: string;
      }
    }
  }[]
}

export default function Success({customerName, products }: SucceessProps) {
    return (
      <>
        <Head>
          <title>Compra efetuada | Ignite Shop</title>
          <meta name="robots" content="noindex" />
        </Head>

        <SuccessContainer>
            <Products>
              {products.map((product) => (
                <ImageContainer key={product.id}>
                  <Image src={product.price.product.images[0]} alt="" width={120} height={110} />
                </ImageContainer>
              ))}
            </Products>

            <h1>Compra efetuada</h1>

            <p>
              Uhuul <strong>{customerName}</strong>, sua compra de {products.length} já está a caminho da sua casa.
            </p>

            <Link href="/">
              Voltar ao catálogo
            </Link>
        </SuccessContainer>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async ( { query } ) => {
  if(!query.session_id) {
    return {
      // notFound: true -> retorna um erro 404
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data

  return {
    props: {
      customerName,
      products
    }
  }
}
