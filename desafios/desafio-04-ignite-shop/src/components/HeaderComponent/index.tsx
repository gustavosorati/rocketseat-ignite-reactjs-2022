import Image from 'next/future/image';

import logoImg from '../../assets/logo.svg';
import {  Header } from '../../styles/pages/app';
import { BtnCart } from '../BtnCart';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export function HeaderComponent(){
  const { changeStatusBag } = useContext(CartContext);

  async function handleOpenCart() {
    changeStatusBag();
  }

  return (
    <Header>
      <Image src={logoImg} alt="" />

      <BtnCart
        type="button"
        typeButton="cart"
        onClick={handleOpenCart} />
    </Header>
  )
}
