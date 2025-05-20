import { useLocalization } from "../../hooks/useLocalization";

interface HeroSectionProps {
  id: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  const { t } = useLocalization();

  return (
    <section
      id={id}
      className="flex flex-col items-center justify-between gap-10 mt-10 md:flex-row md:items-start md:mt-20 md:gap-0"
    >
      <div className="max-w-lg md:w-1/2">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl font-heading">
          {t("hero.greeting")} <strong>{t("hero.name")}</strong>
          <br />
          {t("hero.role")} <strong>{t("hero.developer")}</strong>
          <br />
          {t("hero.location")} <strong>{t("hero.city")}</strong>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base font-body">
          {t("hero.bio")}
        </p>
        <div className="flex mt-6 space-x-4 text-lg text-primary">
          <a
            href="mailto:thenoblerizz@gmail.com"
            aria-label={t("hero.emailAriaLabel")}
            className="hover:text-primary-hover"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/rizz404"
            aria-label={t("hero.githubAriaLabel")}
            className="hover:text-primary-hover"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rizqiansyah-ramadhan-37b0b9313"
            aria-label={t("hero.linkedinAriaLabel")}
            className="hover:text-primary-hover"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61551041113414"
            aria-label={t("hero.facebookAriaLabel")}
            className="hover:text-primary-hover"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/better_call_rizz"
            aria-label={t("hero.instagramAriaLabel")}
            className="hover:text-primary-hover"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <div className="p-1 border-2 border-primary bg-bg-element w-fit">
          <img
            src="https://i.pinimg.com/736x/35/d7/7f/35d77fc6dba1171f679b5fcaa7049803.jpg"
            alt={t("hero.imageAlt")}
            className="object-cover h-auto w-72"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
