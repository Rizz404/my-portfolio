import { useState, useEffect } from "react";

type Language = "en" | "id";
type Translation = {
  home: string;
  skills: string;
  projects: string;
  contact: string;
  downloadCV: string;
  darkMode: string;
  lightMode: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const translations: Record<Language, Translation> = {
    en: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact Me",
      downloadCV: "Download CV",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
    id: {
      home: "Beranda",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Hubungi Saya",
      downloadCV: "Unduh CV",
      darkMode: "Mode Gelap",
      lightMode: "Mode Terang",
    },
  };

  const t = translations[language];

  const links = [
    {
      href: "#",
      title: t.home,
    },
    {
      href: "#",
      title: t.skills,
    },
    {
      href: "#",
      title: t.projects,
    },
    {
      href: "#",
      title: t.contact,
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <header className="bg-bg-element shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <i className="text-2xl miku-text-gradient fas fa-atom"></i>
        </div>

        <nav className="hidden space-x-8 text-sm font-heading font-medium md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-text-primary hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-bg-alt text-text-primary border border-secondary rounded px-2 py-1 text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>

          <button
            onClick={toggleDarkMode}
            className="text-text-primary hover:text-primary transition-colors cursor-pointer"
            aria-label={isDarkMode ? t.lightMode : t.darkMode}
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-accent"></i>
            ) : (
              <i className="fas fa-moon text-secondary"></i>
            )}
          </button>

          <button className="btn btn-primary" type="button">
            {t.downloadCV}
          </button>
        </div>

        <button
          className="text-2xl text-text-primary hover:text-primary md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-bg-element border-t border-secondary-disabled">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-text-primary hover:text-primary font-heading font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <div className="border-t border-secondary-disabled pt-4 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">
                    {isDarkMode ? t.lightMode : t.darkMode}
                  </span>
                  <button
                    onClick={toggleDarkMode}
                    className="text-text-primary hover:text-primary transition-colors"
                    aria-label={isDarkMode ? t.lightMode : t.darkMode}
                  >
                    {isDarkMode ? (
                      <i className="fas fa-sun text-accent"></i>
                    ) : (
                      <i className="fas fa-moon text-secondary"></i>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Language</span>
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-bg-alt text-text-primary border border-secondary rounded px-2 py-1 text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="en">English</option>
                    <option value="id">Indonesia</option>
                    <option value="jp">日本語</option>
                  </select>
                </div>
                <button className="btn btn-primary w-full mt-4" type="button">
                  {t.downloadCV}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
