import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AgricultureEfficiency } from "components/Page/AgricultureEfficiency";
import { AgricultureSustainability } from "components/Page/AgricultureSustainability";
import { Contact } from "components/Page/Contact";
import { Homepage } from "components/Page/Homepage";
import { Iags } from "components/Page/Iags";
import { NotFound } from "components/Page/NotFound";

import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

export function AppRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/IAGs" element={<Iags />} />
        <Route
          path="/agriculture/sustainability"
          element={<AgricultureSustainability />}
        />
        <Route
          path="/agriculture/efficiency"
          element={<AgricultureEfficiency />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}
