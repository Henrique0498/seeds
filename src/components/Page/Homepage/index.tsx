import styles from "./Homepage.module.css";

export function Homepage() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <div className="mx-auto max-w-7xl w-full">
          <div className={styles.presentation}>
            <p className={styles.presentationText}>
              Uma refeição doada, um coração aquecido
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
