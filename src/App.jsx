import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import GetawayWebsite from './GetawayWebsite'
import ProjectsPage from './pages/ProjectsPage'
import WhyGetawayPage from './pages/WhyGetawayPage'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Layout scrollTo={scrollTo}>
        <Routes>
          <Route path="/" element={<GetawayWebsite scrollTo={scrollTo} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/why-getaway" element={<WhyGetawayPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
