import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, LogOut, LayoutDashboard, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/useAuthStore';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-4 z-50 w-full mx-auto max-w-6xl px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-red-900/20 border border-white/20">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center">
            <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2 group">
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
            <button className="p-2 text-gray-600 hover:text-dark">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
