import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
      <p>
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading Office: 20-24 Broadwick Street, London, W1F 8HT
      </p>
    </footer>
  );
}
