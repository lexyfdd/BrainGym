import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/useAuthStore';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 w-full mx-auto max-w-6xl px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-red-900/20 border border-white/20">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center">
            <Link to={user ? "/dashboard" : "/"} onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="bg-primary-500 p-2 rounded-xl text-white group-hover:bg-primary-600 transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-dark">
                BRAIN<span className="text-primary-500">GYM</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {user && (
              <Link to="/dashboard" className="hover:text-primary-500 transition-colors flex items-center gap-1">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
            )}
            <Link to="/categories" className="hover:text-primary-500 transition-colors">Skills</Link>
            <Link to="/age" className="hover:text-primary-500 transition-colors">Training</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-500 hover:text-red-500">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="primary" size="sm" onClick={() => navigate('/login')}>Get Started</Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button 
              className="p-2 text-gray-600 hover:text-dark focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 rounded-b-2xl p-4 space-y-4">
            <nav className="flex flex-col space-y-3 font-medium text-gray-700">
              {user && (
                <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                  <LayoutDashboard className="w-4 h-4 text-primary-500" /> Dashboard
                </Link>
              )}
              <Link to="/categories" onClick={closeMenu} className="p-2 hover:bg-gray-50 rounded-lg">Skills</Link>
              <Link to="/age" onClick={closeMenu} className="p-2 hover:bg-gray-50 rounded-lg">Training</Link>
            </nav>
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              {user ? (
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="w-full" onClick={() => { closeMenu(); navigate('/login'); }}>Login</Button>
                  <Button variant="primary" className="w-full" onClick={() => { closeMenu(); navigate('/login'); }}>Get Started</Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
