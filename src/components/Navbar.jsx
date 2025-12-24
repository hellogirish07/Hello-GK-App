import { Home, User, FileText, Briefcase, Phone } from "lucide-react";

export default function Navbar({ currentPage, setCurrentPage }) {
  // Make sure Font Awesome CSS is loaded (e.g. via CDN or @fortawesome package)
  const menu = [
    { name: "home", icon: <i className="fas fa-home text-2xl" aria-hidden="true"></i>, label: "Home" },
    { name: "about", icon: <i className="fas fa-user text-2xl" aria-hidden="true"></i>, label: "About" },
    { name: "resume", icon: <i className="fas fa-file-alt text-2xl" aria-hidden="true"></i>, label: "Resume" },
    { name: "projects", icon: <i className="fas fa-briefcase text-2xl" aria-hidden="true"></i>, label: "Projects" },
    { name: "contact", icon: <i className="fas fa-phone text-2xl" aria-hidden="true"></i>, label: "Contact" },
  ];

  return (
    <>
      {/* TOP NAV FOR DESKTOP & MOBILE */}
      <nav className="glass w-full fixed top-0 left-0 bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md z-10 rounded-b-2xl">
        
        {/* Left side text → Desktop + Mobile */}
        <div className="flex-1 flex justify-center md:justify-start">
          <h1 className="text-xl uppercase text-yellow-400 font-bold">Girish Suthar</h1>
        </div>

        {/* Right side links → Desktop only */}
        <div className="hidden md:flex gap-6">
          {menu.map((item) => (
            <button
              key={item.name}
              className={`text-lg ${currentPage === item.name ? "text-yellow-400 font-bold" : ""}`}
              onClick={() => setCurrentPage(item.name)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* BOTTOM NAV → MOBILE ONLY */}
      <nav className="glass md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-3 shadow-lg z-10 bottom-nav rounded-t-2xl"> 
        {menu.map((item) => (
          <button
            key={item.name}
            aria-label={item.label}
            className={`flex flex-col items-center text-center ${
              currentPage === item.name ? "text-yellow-400" : "text-white"
            }`}
            onClick={() => setCurrentPage(item.name)}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
