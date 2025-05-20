import { useLocalization } from "../../hooks/useLocalization";

interface ExperienceSectionProps {
  id: string;
}

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
  icon?: string;
};

const ExperienceSection = ({ id }: ExperienceSectionProps) => {
  const { t } = useLocalization();

  const experiences: Experience[] = [
    {
      company: "PT. Sanken Indonesia",
      position: t("experience.sanken.position"),
      period: t("experience.sanken.period"),
      description: [
        t("experience.sanken.description1"),
        t("experience.sanken.description2"),
      ],
      icon: "fas fa-industry",
    },
    {
      company: "Visionet",
      position: t("experience.visionet.position"),
      period: t("experience.visionet.period"),
      description: [t("experience.visionet.description1")],
      icon: "fas fa-laptop-code",
    },
  ];

  const ExperienceCard = ({
    experience,
    isHighlighted,
  }: {
    experience: Experience;
    isHighlighted: boolean;
  }) => {
    return isHighlighted ? (
      <article className="p-5 border-l-4 rounded-lg shadow-md bg-bg-element border-primary">
        <div className="flex items-center mb-2">
          {experience.icon && (
            <div className="mr-3 text-2xl text-primary">
              <i className={experience.icon}></i>
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold miku-text-gradient">
              {experience.position} @ {experience.company}
            </h3>
            <p className="text-xs text-text-tertiary">{experience.period}</p>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          {experience.description.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-sm text-text-secondary"
            >
              <div className="flex items-start gap-2 md:items-center">
                <span className="mt-1 text-primary">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </article>
    ) : (
      <article className="flex items-start space-x-4">
        {experience.icon && (
          <div className="mt-1 text-2xl text-primary">
            <i className={experience.icon}></i>
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">
            {experience.position} @ {experience.company}
          </h3>
          <ul className="mt-2 space-y-1">
            {experience.description.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-text-secondary"
              >
                <div className="flex items-start gap-2 md:items-center">
                  <span className="mt-1 text-xs text-primary">
                    <i className="fas fa-circle"></i>
                  </span>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-1 text-xs text-text-tertiary">{experience.period}</p>
        </div>
      </article>
    );
  };

  return (
    <section id={id} className="max-w-5xl px-4 mx-auto mt-20">
      <h2 className="mb-6 text-xl font-semibold text-center">
        <strong className="miku-text-gradient">
          {t("experience.heading1")}
        </strong>{" "}
        {t("experience.heading2")}
      </h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            isHighlighted={index === 0}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm italic text-text-secondary">
          {t("experience.currentFocus")}
          <span className="font-medium text-primary">
            {" "}
            {t("experience.universityName")}
          </span>{" "}
          {t("experience.universityPeriod")}
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
