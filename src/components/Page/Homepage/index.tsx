import styles from "./Homepage.module.css";

export function Homepage() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <div className="mx-auto max-w-7xl w-full">
          <div className={styles.presentation}>
            <p className={styles.presentationTitle}>
              Uma refeição doada, um coração aquecido
            </p>
            <p className={styles.presentationSubtitle}>
              Seja bem-vindo ao nosso site dedicado à doação de comida e
              plantação de alimentos!
            </p>
            <p className={styles.presentationSubtitle}>
              Aqui, nosso objetivo é promover a solidariedade e a
              sustentabilidade alimentar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 h-52">
        <div className="mx-auto max-w-7xl w-full"></div>
      </section>
    </main>
  );
}
