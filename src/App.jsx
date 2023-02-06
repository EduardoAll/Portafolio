import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './css/style.css';
import './css/additional-styles/animations.css';
import Bio from './pages/Bio';
import Land from './pages/Land';
import Skills from './pages/Skills';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
            <Route path="/" element={<Land />} />
            <Route path="/bio" element={<Bio />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
