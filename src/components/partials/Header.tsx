import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useLocalization } from "../../hooks/useLocalization";
import type { Language } from "../../context/localizationContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
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

  const languages = [
    { code: "en", name: t("language.en"), flag: "🇺🇸" },
    { code: "id", name: t("language.id"), flag: "🇮🇩" },
    { code: "ja", name: t("language.ja"), flag: "🇯🇵" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

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

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
          {/* Custom Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-sm border rounded-lg bg-bg-alt text-text-primary border-secondary font-body hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <span className="text-lg">{currentLanguage?.flag}</span>
              <span className="font-medium">{currentLanguage?.name}</span>
              <i
                className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {isLanguageDropdownOpen && (
              <>
                {/* Overlay untuk menutup dropdown saat klik di luar */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLanguageDropdownOpen(false)}
                ></div>

                <div className="absolute right-0 mt-2 w-40 bg-bg-element border border-secondary rounded-lg shadow-lg z-20 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() =>
                        handleLanguageChange(lang.code as Language)
                      }
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-bg-alt transition-colors duration-150 ${
                        language === lang.code
                          ? "bg-primary bg-opacity-10 text-primary"
                          : "text-text-primary hover:text-primary"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <i className="fas fa-check text-primary ml-auto text-xs"></i>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

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

                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Language</span>
                  <select
                    value={language}
                    onChange={handleLanguageSelectChange}
                    className="px-3 py-2 text-sm border rounded-lg bg-bg-alt text-text-primary border-secondary font-body focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
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
