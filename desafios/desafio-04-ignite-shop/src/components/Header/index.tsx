import Image from 'next/future/image';
import Link from 'next/link';
import logoImg from '../../assets/logo.svg';
import { ShoppingButton } from '../ShoppingButton';
import { HeaderContainer } from './styles';

export function Header(){
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <ShoppingButton
        type="button"
        typeButton="cart"
      />
    </HeaderContainer>
  )
}
