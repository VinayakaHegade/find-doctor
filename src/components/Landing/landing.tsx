import styles from "./landing.module.css";

const LandingPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.landingLeft}>
        <h1 className={styles.landingTitle}>Your Health is Our Priority</h1>
        <p className={styles.landingDescription}>
          Combining the precision of AI with human physiotherapist expertise for
          a pain-free world.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton}>Book Doctor</button>
          <button className={`${styles.ctaButton} ${styles.contactButton}`}>Contact Us</button>
        </div>
      </section>
      <img
        src="src/assets/happy-doctor-one.png"
        className={styles.hero}
        alt="hero image"
      ></img>
    </main>
  );
};

export default LandingPage;
