import { Outlet, NavLink, useLocation } from "react-router";
import { Mail, Instagram, Handshake } from "lucide-react";
import { useEffect } from "react";

export function Root() {
  const location = useLocation();

  useEffect(() => {
    // Global keyboard event handler to prevent save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Cmd+S (save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+S, Cmd+Shift+S (save as)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };

    // Prevent context menu globally
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="overflow-x-auto">
          <div className="px-6 py-4 flex items-center justify-start gap-8 min-w-max md:justify-center">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `transition-colors whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`
              }
            >
              Street Photography
            </NavLink>
            <NavLink 
              to="/concerts"
              className={({ isActive }) => 
                `transition-colors whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`
              }
            >
              Concerts
            </NavLink>
            <NavLink 
              to="/weddings-events"
              className={({ isActive }) => 
                `transition-colors whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`
              }
            >
              Weddings & Events
            </NavLink>
            <NavLink 
              to="/portrait-project"
              className={({ isActive }) => 
                `transition-colors whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`
              }
            >
              Portrait Project
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `transition-colors whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Floating About Button - Only show when not on About page */}
      {location.pathname !== '/about' && (
        <NavLink 
          to="/about"
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="About"
        >
          <Handshake className="w-6 h-6" />
        </NavLink>
      )}

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="px-6 flex justify-center gap-6">
          <a 
            href="mailto:jaumem.jbs@gmail.com" 
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a 
            href="https://www.instagram.com/jaumephoto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}