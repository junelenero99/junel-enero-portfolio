import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage }          from '@/pages/HomePage'
import { AboutPage }         from '@/pages/AboutPage'
import { ExperiencePage }    from '@/pages/ExperiencePage'
import { ProjectsPage }      from '@/pages/ProjectsPage'
import { EducationPage }     from '@/pages/EducationPage'
import { CertificationsPage } from '@/pages/CertificationsPage'
import { ResumePage }        from '@/pages/ResumePage'
import { ContactPage }       from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/"               element={<HomePage />}          />
          <Route path="/about"          element={<AboutPage />}         />
          <Route path="/experience"     element={<ExperiencePage />}    />
          <Route path="/projects"       element={<ProjectsPage />}      />
          <Route path="/education"      element={<EducationPage />}     />
          <Route path="/certifications" element={<CertificationsPage />}/>
          <Route path="/resume"         element={<ResumePage />}        />
          <Route path="/contact"        element={<ContactPage />}       />
          {/* Fallback — redirect unknown routes to home */}
          <Route path="*"               element={<HomePage />}          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
