import styles from "./Iags.module.css";

export function Iags() {
  return (
    <main className={styles.container}>
      <section className={styles.presentation}>
        <h1 className={styles.presentationTitle}>
          Inteligências Artificiais Generativas
        </h1>
      </section>

      <section className={styles.about}>
        <div className="mx-auto max-w-7xl w-full lg:grid lg:grid-cols-2 lg:gap-4 text-emerald-950">
          <h2 className={`${styles.title} lg:text-center lg:my-auto`}>
            O que é?
          </h2>
          <p>
            As inteligências artificiais generativas (IAGs) são sistemas de
            inteligência artificial projetados para criar conteúdo novo e
            original, como imagens, músicas, textos e até mesmo vídeos.
            Diferentemente de outras formas de IA que são treinadas para
            realizar tarefas específicas, as IAGs têm a capacidade de gerar
            conteúdo sem depender exclusivamente de dados existentes.
          </p>
        </div>
      </section>

      <section className="bg-emerald-300 p-4 py-16">
        <div className="mx-auto max-w-7xl w-full lg:grid lg:grid-cols-2 lg:gap-4 text-emerald-950">
          <h2
            className={`${styles.title} lg:text-center lg:my-auto lg:order-2`}
          >
            Como funciona?
          </h2>
          <p>
            As IAGs funcionam por meio de modelos de aprendizado de máquina,
            como as redes neurais, que são treinadas em grandes conjuntos de
            dados para aprender padrões e tendências. Com base nesse
            treinamento, as IAGs podem criar novos conteúdos por conta própria,
            gerando saídas que se assemelham às entradas fornecidas durante o
            treinamento.
          </p>
        </div>
      </section>

      <section className="bg-emerald-500 p-4 py-16">
        <div className="mx-auto max-w-7xl w-full text-emerald-950 mb-4">
          <h2 className={`${styles.title}`}>Como utilizar?</h2>
          <p>
            Na agricultura, as IAGs podem ser utilizadas de várias maneiras para
            melhorar a eficiência e a produtividade. Aqui estão alguns exemplos
            de aplicação:
          </p>
        </div>

        <div className="flex gap-4 mb-4 p-4">
          <h3 className={`font-semibold ${styles.titleList}`}>
            Melhoramento <br /> de culturas
          </h3>
          <p>
            As IAGs podem ser usadas para gerar novas variedades de plantas com
            características desejáveis, como resistência a doenças, maior
            produtividade ou melhor qualidade nutricional. Os algoritmos de
            aprendizado podem analisar grandes quantidades de dados genômicos e
            de características agronômicas para identificar combinações
            genéticas promissoras.
          </p>
        </div>

        <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
          <h3 className={`font-semibold ${styles.titleList}`}>
            Otimização de <br />
            irrigação e fertilização
          </h3>
          <p>
            As IAGs podem analisar dados de sensores de solo, clima e plantas
            para determinar as necessidades de irrigação e fertilização em tempo
            real. Com base nesses dados, podem fornecer recomendações precisas
            sobre o momento e a quantidade de água e nutrientes que devem ser
            aplicados em diferentes partes de um campo.
          </p>
        </div>

        <div className="flex gap-4 mb-4 p-4">
          <h3 className={`font-semibold ${styles.titleList}`}>
            Previsão <br />
            de safras
          </h3>
          <p>
            Utilizando dados históricos, como condições climáticas, práticas
            agrícolas e dados de satélites, as IAGs podem prever a produção de
            safras futuras. Isso ajuda os agricultores a se prepararem
            adequadamente, desde o planejamento de colheita até a alocação de
            recursos.
          </p>
        </div>

        <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
          <h3 className={`font-semibold ${styles.titleList}`}>
            Detecção de <br />
            pragas e doenças
          </h3>
          <p>
            As IAGs podem analisar imagens de plantas e identificar sinais de
            infestação por pragas ou doenças. Isso permite uma detecção precoce
            e uma resposta rápida para evitar a propagação e minimizar os danos
            às plantações.
          </p>
        </div>

        <div className="flex gap-4 p-4">
          <h3 className={`font-semibold ${styles.titleList}`}>
            Geração de <br />
            receitas sustentáveis
          </h3>
          <p>
            As IAGs podem ser utilizadas para criar modelos de negócios
            sustentáveis na agricultura, como o desenvolvimento de sistemas de
            cultivo vertical otimizados, a recomendação de práticas agrícolas
            ambientalmente amigáveis ou a identificação de oportunidades de
            diversificação de culturas.
          </p>
        </div>
      </section>
    </main>
  );
}
