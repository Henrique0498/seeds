import { BrowserRouter } from "react-router-dom";

import { Homepage } from "components/Page/Homepage";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

import styles from "styles/App.module.css";

function App() {
  return (
    <div className={`${styles.container} mx-auto max-w-7xl text-gray-900`}>
      <BrowserRouter>
        <Header />
        <Homepage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
