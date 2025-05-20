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
    <header className="shadow-md bg-bg-element">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <i className="text-2xl miku-text-gradient fas fa-atom"></i>
        </div>

        <nav className="hidden space-x-8 text-sm font-medium font-heading md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-colors text-text-primary hover:text-primary"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="items-center hidden space-x-4 md:flex">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-2 py-1 text-sm border rounded bg-bg-alt text-text-primary border-secondary font-body focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>

          <button
            onClick={toggleDarkMode}
            className="transition-colors cursor-pointer text-text-primary hover:text-primary"
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
        <div className="border-t md:hidden bg-bg-element border-secondary-disabled">
          <div className="container px-6 py-4 mx-auto">
            <nav className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="py-2 font-medium transition-colors text-text-primary hover:text-primary font-heading"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <div className="flex flex-col pt-4 space-y-4 border-t border-secondary-disabled">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">
                    {isDarkMode ? t.lightMode : t.darkMode}
                  </span>
                  <button
                    onClick={toggleDarkMode}
                    className="transition-colors text-text-primary hover:text-primary"
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
                    className="px-2 py-1 text-sm border rounded bg-bg-alt text-text-primary border-secondary font-body focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="en">English</option>
                    <option value="id">Indonesia</option>
                  </select>
                </div>
                <button className="w-full mt-4 btn btn-primary" type="button">
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
