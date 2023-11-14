import { ReactNode } from "react";

import CartProvider from "../CartProvider/CartProvider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  );
}
