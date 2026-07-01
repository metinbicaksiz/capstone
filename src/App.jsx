import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import MaterialsPage from './pages/MaterialsPage'
import GrammarDiagnosticPage from './pages/GrammarDiagnosticPage'
import VocabDiagnosticPage from './pages/VocabDiagnosticPage'
import Module1Page from './pages/modules/Module1Page'
import Module2Page from './pages/modules/Module2Page'
import Module3Page from './pages/modules/Module3Page'
import Module4Page from './pages/modules/Module4Page'
import PreparationPage from './pages/PreparationPage'
import PreparationEssayPage from './pages/PreparationEssayPage'
import UserProfile from './pages/UserProfile'
import ProtectedRoute from './components/ProtectedRoute'

// Module 1 Lessons
import Module1Lesson1 from './pages/modules/Module1Lesson1'
import Module1Lesson2 from './pages/modules/Module1Lesson2'
import Module1Lesson3 from './pages/modules/Module1Lesson3'
import Module1Lesson4 from './pages/modules/Module1Lesson4'
import Module1Lesson5 from './pages/modules/Module1Lesson5'

// Module 2 Lessons
import Module2Lesson1 from './pages/modules/Module2Lesson1'
import Module2Lesson2 from './pages/modules/Module2Lesson2'
import Module2Lesson3 from './pages/modules/Module2Lesson3'
import Module2Lesson4 from './pages/modules/Module2Lesson4'
import Module2Lesson5 from './pages/modules/Module2Lesson5'

// Module 3 Lessons
import Module3Lesson1 from './pages/modules/Module3Lesson1'
import Module3Lesson2 from './pages/modules/Module3Lesson2'
import Module3Lesson3 from './pages/modules/Module3Lesson3'
import Module3Lesson4 from './pages/modules/Module3Lesson4'
import Module3Lesson5 from './pages/modules/Module3Lesson5'

// Module 4 Lessons
import Module4Lesson1 from './pages/modules/Module4Lesson1'
import Module4Lesson2 from './pages/modules/Module4Lesson2'
import Module4Lesson3 from './pages/modules/Module4Lesson3'
import Module4Lesson4 from './pages/modules/Module4Lesson4'
import Module4Lesson5 from './pages/modules/Module4Lesson5'

import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-wrapper">
          <Header />

          <main className="app-main">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route path="/grammar-diagnostic" element={<GrammarDiagnosticPage />} />
              <Route path="/vocab-diagnostic" element={<VocabDiagnosticPage />} />

              {/* Protected Routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/profile/:userId" element={<UserProfile />} />

              {/* Module Routes */}
              <Route path="/module1" element={<Module1Page />} />
              <Route path="/module1/lesson-1" element={<Module1Lesson1 />} />
              <Route path="/module1/lesson-2" element={<Module1Lesson2 />} />
              <Route path="/module1/lesson-3" element={<Module1Lesson3 />} />
              <Route path="/module1/lesson-4" element={<Module1Lesson4 />} />
              <Route path="/module1/lesson-5" element={<Module1Lesson5 />} />

              <Route path="/module2" element={<Module2Page />} />
              <Route path="/module2/lesson-1" element={<Module2Lesson1 />} />
              <Route path="/module2/lesson-2" element={<Module2Lesson2 />} />
              <Route path="/module2/lesson-3" element={<Module2Lesson3 />} />
              <Route path="/module2/lesson-4" element={<Module2Lesson4 />} />
              <Route path="/module2/lesson-5" element={<Module2Lesson5 />} />

              <Route path="/module3" element={<Module3Page />} />
              <Route path="/module3/lesson-1" element={<Module3Lesson1 />} />
              <Route path="/module3/lesson-2" element={<Module3Lesson2 />} />
              <Route path="/module3/lesson-3" element={<Module3Lesson3 />} />
              <Route path="/module3/lesson-4" element={<Module3Lesson4 />} />
              <Route path="/module3/lesson-5" element={<Module3Lesson5 />} />

              <Route path="/module4" element={<Module4Page />} />
              <Route path="/module4/lesson-1" element={<Module4Lesson1 />} />
              <Route path="/module4/lesson-2" element={<Module4Lesson2 />} />
              <Route path="/module4/lesson-3" element={<Module4Lesson3 />} />
              <Route path="/module4/lesson-4" element={<Module4Lesson4 />} />
              <Route path="/module4/lesson-5" element={<Module4Lesson5 />} />

              <Route path="/preparation" element={<PreparationPage />} />
              <Route path="/preparation/:essaySlug" element={<PreparationEssayPage />} />

              {/* 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
