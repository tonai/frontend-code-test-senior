import Image from "next/image";

import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Image
        src="/octopus-logo.svg"
        alt="Octopus Energy Logo"
        width={192}
        height={27}
      />
      <Image src="/basket.svg" alt="Basket" width={30} height={27} />
    </header>
  );
}
