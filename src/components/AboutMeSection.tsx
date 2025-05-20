import { useLocalization } from "../hooks/useLocalization";

interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection = ({ id }: AboutMeSectionProps) => {
  const { t } = useLocalization();

  return (
    <section
      id={id}
      className="flex flex-col items-center max-w-5xl gap-10 px-4 mx-auto mt-20 md:flex-row md:items-start"
    >
      <div className="flex justify-center md:w-1/3 md:justify-start">
        <div className="p-1 overflow-hidden border-2 rounded w-60 h-60 bg-bg-element border-primary">
          <img
            src="https://i.pinimg.com/736x/a1/1b/07/a11b07f6d1022fb95d2d668cc77eee96.jpg"
            alt={t("aboutMe.imageAlt")}
            className="object-cover w-full h-full rounded"
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-sm leading-relaxed md:w-2/3 md:text-base">
        <h2 className="mb-4 text-xl font-semibold text-center md:text-left">
          {t("aboutMe.heading1")}{" "}
          <strong className="miku-text-gradient">
            {t("aboutMe.heading2")}
          </strong>
        </h2>

        <p className="mb-4 text-text-secondary">{t("aboutMe.paragraph1")}</p>

        <p className="mb-4 text-text-secondary">{t("aboutMe.paragraph2")}</p>

        <div className="mt-6">
          <h3 className="mb-2 text-lg font-medium text-primary">
            {t("aboutMe.additionalSkillsHeading")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {(
              t("aboutMe.additionalSkills", {
                returnObjects: true,
              }) as unknown as string[]
            ).map((skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded bg-bg-element"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 text-lg font-medium text-primary">
            {t("aboutMe.languagesHeading")}
          </h3>
          <div className="flex gap-3">
            {(
              t("aboutMe.languages", {
                returnObjects: true,
              }) as unknown as string[]
            ).map((lang: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded bg-bg-element"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm italic text-text-tertiary">
          "{t("aboutMe.quote")}"
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
