import Image from 'next/future/image';

import logoImg from '../../assets/logo.svg';
import {  Header } from '../../styles/pages/app';
import { BtnCart } from '../BtnCart';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import Link from 'next/link';

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
