import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="src/assets/logo.svg" className={styles.logo} alt="logo"></img>
      <div className={styles.headerRight}>
        <nav>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>
        </nav>
        <button className={styles.button}>Find Doctor</button>
      </div>
    </header>
  );
};

export default Header;
