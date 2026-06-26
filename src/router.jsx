import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './Pages/HomePage'
import DevelopersPage from './Pages/DevelopersPage'
import ProfilePage from './Pages/ProfilePage'
import ProjectPage from './Pages/ProjectPage'
import SavedPage from './Pages/SavedPage'
import ContactPage from './Pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'developers', element: <DevelopersPage /> },
      { path: 'profile/:id', element: <ProfilePage /> },
      { path: 'project/:id', element: <ProjectPage /> },
      { path: 'saved', element: <SavedPage /> },
      { path: 'contact/:id', element: <ContactPage /> },
    ]
  }
])

export default router