import styles from "./AgricultureEfficiency.module.css";

export function AgricultureEfficiency() {
  return (
    <main className={styles.container}>
      <section className={styles.presentation}>
        <h1 className={styles.presentationTitle}>Agricultura Eficiente</h1>
      </section>

      <section className="bg-emerald-500 p-4 py-16">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Agricultura
              <br />
              de precisão
            </h3>
            <p>
              A agricultura de precisão utiliza tecnologias avançadas, como
              sensores, sistemas de informação geográfica (SIG) e drones, para
              monitorar e otimizar o uso de recursos agrícolas. Isso inclui a
              aplicação precisa de água, fertilizantes e pesticidas, levando a
              um uso mais eficiente desses recursos e aumentando a produtividade
              das culturas.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Hidroponia
            </h3>
            <p>
              A hidroponia é um sistema de cultivo sem solo em que as plantas
              são cultivadas em soluções nutritivas líquidas. Esse método
              permite um uso mais eficiente da água, pois a solução é
              recirculada e não há desperdício por drenagem. Além disso, a
              hidroponia permite um controle preciso dos nutrientes fornecidos
              às plantas, resultando em um crescimento mais rápido e maior
              produtividade.
            </p>
          </div>

          <div className="flex gap-4 mb-4 p-4">
            <h3 className={`font-semibold mr-7 ${styles.titleList}`}>
              Aquaponia
            </h3>
            <p>
              A aquaponia é um sistema de cultivo que combina a criação de
              peixes com a produção de plantas em um ambiente simbiótico. Os
              resíduos dos peixes são convertidos em nutrientes para as plantas,
              que, por sua vez, filtram a água para os peixes. Esse ciclo
              fechado permite um uso eficiente de água e nutrientes, resultando
              em alta produtividade tanto na produção de peixes quanto de
              plantas.
            </p>
          </div>

          <div className="flex gap-4 mb-4 bg-emerald-600 p-4 rounded">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Agricultura
              <br />
              vertical
            </h3>
            <p>
              A agricultura vertical envolve o cultivo de plantas em camadas
              verticais, geralmente em estruturas indoor com iluminação
              artificial. Esse método permite um uso eficiente do espaço, pois
              as plantas são empilhadas verticalmente. Além disso, a agricultura
              vertical utiliza sistemas hidropônicos ou aeropônicos, que
              economizam água em comparação com a agricultura tradicional.
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Culturas resistentes
              <br />à seca
            </h3>
            <p>
              Em regiões onde a disponibilidade de água é limitada, cultivar
              culturas resistentes à seca pode ser uma estratégia eficiente.
              Essas culturas são geneticamente modificadas para tolerar
              condições de seca e requerem menos água para crescer. Exemplos
              incluem variedades de milho e trigo resistentes à seca.
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <h3 className={`font-semibold ${styles.titleList}`}>
              Integração
              <br />
              de culturas
            </h3>
            <p>
              A integração de culturas é uma prática agrícola em que diferentes
              culturas são cultivadas em conjunto no mesmo espaço e tempo. Isso
              ajuda a maximizar a utilização dos recursos disponíveis, pois
              diferentes plantas têm diferentes necessidades de nutrientes e
              água. Além disso, certas combinações de culturas podem ter
              benefícios mútuos, como a fixação de nitrogênio por leguminosas,
              que enriquece o solo para outras culturas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
