import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from 'next/link';
import { useRouter } from "next/router";
import styles from './styles.module.scss';


interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter();

  console.log(rest)
  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}