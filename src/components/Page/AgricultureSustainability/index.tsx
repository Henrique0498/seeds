import styles from "./AgricultureSustainability.module.css";

export function AgricultureSustainability() {
  return (
    <main className={styles.container}>
      <section className={styles.presentation}>
        <h1 className={styles.presentationTitle}>Agricultura Sustentável</h1>
      </section>

      <section className={styles.about}>
        <div className="mx-auto max-w-7xl w-full lg:grid lg:grid-cols-2 lg:gap-4 text-emerald-950">
          <h2 className={`${styles.title} lg:text-center lg:my-auto`}>
            O que é?
          </h2>
          <p>
            A agricultura sustentável é um sistema de produção agrícola que
            busca equilibrar a produção de alimentos, a proteção do meio
            ambiente e o bem-estar social. Ela envolve a adoção de práticas
            agrícolas que são ecologicamente saudáveis, socialmente justas e
            economicamente viáveis a longo prazo.
          </p>
        </div>
      </section>

      <section className="bg-emerald-300 p-4 py-16">
        <div className="mx-auto max-w-7xl w-full text-emerald-950 mb-4">
          <h2 className={`${styles.title}`}>Conceitos</h2>
          <p>
            Existem vários conceitos e princípios básicos da agricultura
            sustentável:
          </p>
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Conservação
              <br />
              do solo
            </h3>
            <p>
              A proteção e a melhoria da qualidade do solo são fundamentais.
              Isso inclui a redução da erosão, o aumento da matéria orgânica, a
              rotação de culturas e a utilização de técnicas de manejo
              conservacionistas, como o plantio direto.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-400 p-4 rounded">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Uso eficiente
              <br />
              da água
            </h3>
            <p>
              A gestão sustentável da água é crucial. Isso envolve o uso de
              técnicas de irrigação mais eficientes, como irrigação por
              gotejamento, e a adoção de práticas de conservação de água, como a
              cobertura do solo.
            </p>
          </div>

          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Conservação da
              <br />
              biodiversidade
            </h3>
            <p>
              A manutenção da diversidade biológica é essencial para a saúde dos
              ecossistemas agrícolas. Isso pode ser alcançado por meio da
              criação de habitats naturais, da preservação de áreas de vegetação
              nativa e do estímulo à presença de polinizadores e organismos
              benéficos.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-400 p-4 rounded">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Uso sustentável
              <br />
              de insumos
            </h3>
            <p>
              A minimização do uso de agroquímicos, como pesticidas e
              fertilizantes sintéticos, é um objetivo importante. A preferência
              é dada aos métodos de controle biológico de pragas, ao uso de
              adubos orgânicos e ao manejo integrado de pragas.
            </p>
          </div>

          <div className="flex gap-4 p-4 mb-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Diversificação
              <br />
              de culturas
            </h3>
            <p>
              A prática da rotação de culturas e da diversificação de espécies
              cultivadas é uma estratégia importante para reduzir a dependência
              de monoculturas e melhorar a saúde do solo.
            </p>
          </div>

          <div className="flex gap-4 bg-emerald-400 p-4 rounded">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Energia
              <br />
              renovável
            </h3>
            <p>
              A adoção de fontes de energia renovável, como a energia solar e
              eólica, na agricultura pode reduzir a dependência de combustíveis
              fósseis e diminuir as emissões de gases de efeito estufa.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 p-4 py-16">
        <div className="mx-auto max-w-7xl w-full text-emerald-950 mb-4">
          <h2 className={`${styles.title}`}>Aplicação sustentavel</h2>
          <p>
            Existem várias práticas agrícolas sustentáveis que podem ser
            adotadas:
          </p>
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Agroecologia
            </h3>
            <p>
              É um sistema agrícola que integra princípios ecológicos no
              planejamento e manejo das atividades agrícolas, promovendo a
              biodiversidade, o uso eficiente de recursos naturais e a redução
              do impacto ambiental.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Agricultura
              <br />
              orgânica
            </h3>
            <p>
              Envolve o uso de fertilizantes naturais, o controle biológico de
              pragas e doenças, a rotação de culturas e a proibição do uso de
              organismos geneticamente modificados (OGMs) e produtos químicos
              sintéticos.
            </p>
          </div>

          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Permacultura
            </h3>
            <p>
              É um sistema de design que busca criar ambientes produtivos e
              sustentáveis, imitando os padrões encontrados na natureza. Ele
              enfatiza a diversidade, a resiliência e a interconexão dos
              elementos em um sistema agrícola.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Aquaponia
            </h3>
            <p>
              É uma prática que combina a criação de peixes em tanques com o
              cultivo de plantas em um sistema recirculante. Os resíduos dos
              peixes são utilizados como fertilizante para as plantas, enquanto
              as plantas ajudam a filtrar a água para os peixes.
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Agrossilvicultura
            </h3>
            <p>
              É a integração de árvores com culturas agrícolas ou pecuária. Essa
              prática pode melhorar a fertilidade do solo, fornecer sombra para
              animais e culturas, além de contribuir para a conservação da
              biodiversidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

