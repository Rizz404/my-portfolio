// import { useState } from "react";

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
  icon?: string;
};

const ExperienceSection = () => {
  // const [showAll, setShowAll] = useState(false);

  const experiences: Experience[] = [
    {
      company: "PT. Sanken Indonesia",
      position: "Internship - Quality Control",
      period: "2023 - 2024",
      description: [
        "Melakukan pengecekan kualitas pada unit refrigerator untuk memastikan kesesuaian dengan standar perusahaan.",
        "Berkolaborasi dengan tim produksi untuk mengidentifikasi dan menyelesaikan cacat selama proses manufaktur.",
      ],
      icon: "fas fa-industry",
    },
    {
      company: "Visionet",
      position: "One Day Experience as IT Team",
      period: "Oktober 2023",
      description: [
        "Mengikuti pelatihan singkat sebagai bagian dari tim IT untuk pengalaman praktis.",
      ],
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
      <article className="bg-bg-element p-5 rounded-lg shadow-md border-l-4 border-primary">
        <div className="flex items-center mb-2">
          {experience.icon && (
            <div className="text-primary text-2xl mr-3">
              <i className={experience.icon}></i>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg miku-text-gradient">
              {experience.position} @ {experience.company}
            </h3>
            <p className="text-text-tertiary text-xs">{experience.period}</p>
          </div>
        </div>
        <ul className="space-y-2 mt-3">
          {experience.description.map((item, index) => (
            <li
              key={index}
              className="text-text-secondary text-sm flex items-start"
            >
              <div className="flex items-start md:items-center gap-2">
                <span className="text-primary mt-1">
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
          <div className="text-primary text-2xl mt-1">
            <i className={experience.icon}></i>
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg">
            {experience.position} @ {experience.company}
          </h3>
          <ul className="space-y-1 mt-2">
            {experience.description.map((item, index) => (
              <li
                key={index}
                className="text-text-secondary text-sm flex items-start"
              >
                <div className="flex items-start md:items-center gap-2">
                  <span className="text-primary mt-1 text-xs">
                    <i className="fas fa-circle"></i>
                  </span>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-text-tertiary text-xs mt-1">{experience.period}</p>
        </div>
      </article>
    );
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Pengalaman <strong className="miku-text-gradient">Profesional</strong>
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
        <p className="text-text-secondary text-sm italic">
          Saat ini fokus untuk mendapatkan pengalaman praktis dan menyelesaikan
          pendidikan saya di
          <span className="text-primary font-medium">
            {" "}
            Global Institute Technology And Business
          </span>{" "}
          (2022-2025).
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
