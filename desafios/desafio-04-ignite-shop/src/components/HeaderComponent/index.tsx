import Image from 'next/future/image';
import Link from 'next/link';
import { useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { CartContext } from '../../context/CartContext';
import { Header } from '../../styles/pages/app';
import { BtnCart } from '../BtnCart';

export function HeaderComponent(){
  const { changeStatusBag } = useContext(CartContext);

  async function handleOpenCart() {
    changeStatusBag();
  }

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <BtnCart
        type="button"
        typeButton="cart"
        onClick={handleOpenCart} />
    </Header>
  )
}
