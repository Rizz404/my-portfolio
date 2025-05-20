import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useLocalization } from "../hooks/useLocalization";
import type { Language } from "../context/localizationContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { t, language, setLanguage } = useLocalization();

  const links = [
    { href: "#hero", title: t("navigation.home") },
    { href: "#skills", title: t("navigation.skills") },
    { href: "#about-me", title: t("navigation.aboutMe") },
    { href: "#experience", title: t("navigation.experience") },
    { href: "#projects", title: t("navigation.projects") },
    { href: "#contact", title: t("navigation.contact") },
  ];

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // * Mencegah perilaku default link (jump langsung)
    e.preventDefault();
    // * Hapus '#' dari href
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    setLanguage(newLanguage);
  };

  return (
    <header className="shadow bg-bg-element">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <i className="text-2xl miku-text-gradient fas fa-atom"></i>
        </div>

        <nav className="hidden space-x-8 text-sm font-medium font-heading md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
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
            <option value="en">{t("language.en")}</option>
            <option value="id">{t("language.id")}</option>
          </select>

          <button
            onClick={toggleDarkMode}
            className="transition-colors cursor-pointer text-text-primary hover:text-primary"
            aria-label={isDarkMode ? t("theme.lightMode") : t("theme.darkMode")}
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-accent"></i>
            ) : (
              <i className="fas fa-moon text-secondary"></i>
            )}
          </button>

          <a
            className="btn btn-primary"
            href="/cv-rizqiansyah-ramadhan.pdf"
            download="cv-rizqiansyah-ramadhan.pdf"
          >
            {t("actions.downloadCV")}
          </a>
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
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="py-2 font-medium transition-colors text-text-primary hover:text-primary font-heading"
                >
                  {link.title}
                </a>
              ))}
              <div className="flex flex-col pt-4 space-y-4 border-t border-secondary-disabled">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">
                    {isDarkMode ? t("theme.lightMode") : t("theme.darkMode")}
                  </span>
                  <button
                    onClick={toggleDarkMode}
                    className="transition-colors text-text-primary hover:text-primary"
                    aria-label={
                      isDarkMode ? t("theme.lightMode") : t("theme.darkMode")
                    }
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
                    <option value="en">{t("language.en")}</option>
                    <option value="id">{t("language.id")}</option>
                  </select>
                </div>
                <a
                  className="w-full mt-4 btn btn-primary"
                  href="/cv-rizqiansyah-ramadhan.pdf"
                  download="cv-rizqiansyah-ramadhan.pdf"
                >
                  {t("actions.downloadCV")}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
