import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import GetawayWebsite from './GetawayWebsite'
import ProjectsPage from './pages/ProjectsPage'
import WhyGetawayPage from './pages/WhyGetawayPage'
import ComingSoonPage from './pages/ComingSoonPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout scrollTo={scrollTo}>
        <Routes>
          <Route path="/" element={<GetawayWebsite scrollTo={scrollTo} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/why-getaway" element={<WhyGetawayPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
