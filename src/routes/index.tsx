import { Homepage } from "components/Page/Homepage";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
