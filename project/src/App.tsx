import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { AppointmentPage } from './pages/appointment';
import { TelemedicinePage } from './pages/telemedicine';
import { EducationPage } from './pages/education';
import { CommunityPage } from './pages/community';
import { EmergencyPage } from './pages/emergency';
import { LoginPage } from './pages/login';
import { AboutPage } from './pages/about';
import { ServicesPage } from './pages/services';
import { ContactPage } from './pages/contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/telemedicine" element={<TelemedicinePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;