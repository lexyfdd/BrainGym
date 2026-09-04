import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-500 via-red-600 to-red-900 text-white selection:bg-yellow-400 selection:text-red-900">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <Outlet />
      </main>
    </div>
  );
}
