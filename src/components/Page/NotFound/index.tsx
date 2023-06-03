import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <main className={styles.container}>
      <div className="p-4 bg-gray-50 border flex items-center flex-col shadow-xl rounded-lg">
        <h1 className={styles.title}>Erro 404</h1>
        <p className="text-lg text-gray-600 text-center">
          Infelizmente não conseguimos encontrar essa página
        </p>
      </div>
    </main>
  );
}
