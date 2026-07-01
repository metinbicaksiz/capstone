import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Header.css'

export default function Header() {
  const { user, profile, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="site-logo">
          ✏️ EFL Academic Writing <span>| B1 Intermediate</span>
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/materials">Study Materials</Link>
          <Link to="/module1">Module 1</Link>
          <Link to="/module2">Module 2</Link>
          <Link to="/module3">Module 3</Link>
          <Link to="/module4">Module 4</Link>
          <Link to="/preparation">Preparation</Link>

          {user ? (
            <>
              <Link to="/profile" className="profile-link">
                👤 {profile?.name || 'Profile'}
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-link">🔐 Login</Link>
              <Link to="/signup" className="signup-link">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
