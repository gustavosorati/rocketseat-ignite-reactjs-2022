import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import {stripe} from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}

export default function Product({product}: ProductProps) {
  const { isFallback } = useRouter()

  if(isFallback) return <p>Loading</p>

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

// Sempre que utilizarmos getStaticProps e ele dependender de um parâmetro
// Iremos precisar gerar um getStaticPaths para passar esses parâmetros na build inicial
export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / mais acessados -> pois as páginas desses produtos já estaram
  // disponiveis

  // O resto dos produtos iria dar 404, mas para isso temos a opção fallback que quando false retorna 404, enquanto o true tentará criar a página caso o parametro ainda não tenha sido passado
  // Contudo quando utilizamos true, o next monta a pagina sem os dados do produto, por debaixo dos panos ele tentará executar o getStaticProps.
  // Por isso temos que capturar o estado da requisição e se necessário rodar um outro componente, enquanto o fetching não termina.
  // A opção blocking - Não exibe nada em tela enquanto não for carregado os dados, sendo uma experiência pior


  return {
    paths: [
      {
        params: { id: 'prod_MLH5Wy0Y97hDAC' }
      }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({params}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: Intl.NumberFormat('pt-br', {
          currency: 'BRL',
          style: 'currency'
        }).format(price.unit_amount! / 100),
        description: product.description
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
