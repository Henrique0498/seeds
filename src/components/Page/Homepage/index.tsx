import { CardEvaluation } from "components/molecules/CardEvaluation";
import styles from "./Homepage.module.css";

export function Homepage() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <div className="mx-auto max-w-7xl w-full flex flex-col justify-between">
          <div className={styles.presentation}>
            <h2 className={styles.presentationTitle}>
              Abra seu coração, doe comida e plante sorrisos
            </h2>
            <p className={styles.presentationSubtitle}>
              Seja bem-vindo ao nosso site dedicado à doação de comida e
              plantação de alimentos!
            </p>
            <p className={styles.presentationSubtitle}>
              Aqui, nosso objetivo é promover a solidariedade e a
              sustentabilidade alimentar.
            </p>
          </div>

          <div
            className={`${styles.cardInvite} p-4 bg-white border border-gray-200 rounded-lg shadow self-end`}
          >
            <div className={styles.cardInvite_background}>
              <div className={styles.background_main} />
              <div className={styles.background_circle} />
            </div>

            <div className={styles.cardInvite_header}>
              Alimente vidas: doe, plante, transforme
            </div>
            <div className={styles.cardInvite_body}>
              Sua doação de comida é o ingrediente essencial para alimentar
              sonhos e nutrir vidas. Plante solidariedade, colha sorrisos.
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-auto">
                Aquecer um coração
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 py-16 p-4">
        <div className="mx-auto max-w-7xl w-full lg:grid lg:grid-cols-2 lg:gap-4">
          <h2 className={`${styles.presentationTitle} lg:m-auto`}>
            Sobre a nossa proposta
          </h2>
          <p className="text-emerald-950">
            A nossa proposta é criar uma plataforma de conexão entre doadores de
            alimentos, ONGs e pessoas necessitadas. Através dessa plataforma
            inovadora, buscamos promover a doação de comida e incentivar a
            agricultura sustentável. Nossa visão é construir uma rede de
            solidariedade, nutrindo corpos e corações, e proporcionar um futuro
            mais justo e equitativo. Junte-se a nós nessa jornada
            transformadora, onde cada doação e parceria conta, para semear
            esperança e acabar com a fome de uma vez por todas.
          </p>
        </div>
      </section>

      <section className={styles.available}>
        <div className="mx-auto max-w-7xl w-full p-4 text-emerald-950">
          <h2 className={`${styles.presentationTitle}`}>Avaliações</h2>
          <div className="carousel rounded-box w-full gap-4 p-6">
            <div className="carousel-item w-96 card card-side shadow-md">
              <CardEvaluation
                title="Jubilindo Silva"
                imageSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                rating={5}
                text="O processo de doação pelo site foi simples e rápido. Amei"
              />
            </div>

            <div className="carousel-item w-96 ">
              <CardEvaluation
                title="Leticia Santos"
                imageSrc="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                rating={4}
                text="O site de doação de comida é muito intuitivo, facilitando o processo de ajudar."
              />
            </div>
            <div className="carousel-item w-96 ">
              <CardEvaluation
                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                title="Jalim hamei"
                rating={5}
                text="Facilidade surpreendente para doar comida online."
              />
            </div>
            <div className="carousel-item w-96 ">
              <CardEvaluation
                title="Carolina Costas"
                imageSrc="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                rating={5}
                text="Doação fácil e rápida. Ótima experiência!"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
