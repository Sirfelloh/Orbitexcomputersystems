import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import CoreValues from './pages/CoreValues';
import Contact from './pages/Contact';
import RequestQuotation from './pages/RequestQuotation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="core-values" element={<CoreValues />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<RequestQuotation />} />
      </Route>
    </Routes>
  );
}

export default App;
