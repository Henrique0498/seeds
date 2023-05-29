import { BrowserRouter } from "react-router-dom";

import { Homepage } from "components/Page/Homepage";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

function App() {
  return (
    <div className={`text-gray-900`}>
      <BrowserRouter>
        <Header />
        <Homepage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
