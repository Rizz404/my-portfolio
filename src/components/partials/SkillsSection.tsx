import { useState } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsSectionProps {
  id: string;
}

type Skill = { name: string; picture: string };
type SkillsByCategory = {
  all: Skill[];
  language: Skill[];
  framework: Skill[];
  database: Skill[];
  tools: Skill[];
  addition: Skill[];
};

const SkillsSection = ({ id }: SkillsSectionProps) => {
  type Category =
    | "all"
    | "language"
    | "framework"
    | "database"
    | "tools"
    | "addition";
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLocalization();

  // Todo: Bakal ditambahin Language, Framework, Database, Tools, Addition
  const skills: SkillsByCategory = {
    all: [],
    language: [
      {
        name: "Javascript",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Go (golang)",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      },
      {
        name: "Dart",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      },
      {
        name: "PHP",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
    ],
    framework: [
      {
        name: "Express",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Laravel",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        name: "NestJS",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Flask",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "SQLite",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "MongoDB",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    tools: [
      {
        name: "Git",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        picture:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Docker",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "VS Code",
        picture:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
    addition: [{ name: "JWT", picture: "https://jwt.io/img/pic_logo.svg" }],
  };

  skills.all = [
    ...skills.language,
    ...skills.framework,
    ...skills.database,
    ...skills.tools,
    ...skills.addition,
  ];

  const categories = [
    { id: "all", name: t("skills.categories.all") },
    { id: "language", name: t("skills.categories.language") },
    {
      id: "framework",
      name: t("skills.categories.framework"),
    },
    { id: "database", name: t("skills.categories.database") },
    { id: "tools", name: t("skills.categories.tools") },
    { id: "addition", name: t("skills.categories.addition") },
  ];

  const displayedSkills = showAll
    ? skills[activeCategory]
    : skills[activeCategory].slice(0, 6);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id={id} className="max-w-4xl px-4 mx-auto mt-20">
      <h2 className="mb-6 text-xl font-semibold text-center">
        {t("skills.heading") || "My"}
        <strong className="miku-text-gradient">
          {" "}
          {t("skills.heading2") || "Skills"}
        </strong>
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-text-inverted"
                : "border border-secondary hover:border-primary hover:text-primary"
            }`}
            onClick={() => handleCategoryChange(category.id as Category)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 text-text-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 col-span-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                className="flex flex-col items-center justify-center p-4 border rounded border-bg-muted bg-bg-element hover:bg-bg-hover hover:border-secondary-hover"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img
                  src={skill.picture}
                  alt={`${skill.name} logo`}
                  className="w-10 h-10 mb-2"
                />
                <span className="text-xs font-semibold text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {skills[activeCategory].length > 6 && (
        <div className="flex justify-center mt-6">
          <motion.button
            className="px-4 py-2 text-sm font-medium rounded border border-secondary text-secondary transition-colors duration-200 hover:border-primary hover:text-primary"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? t("skills.showLess") : t("skills.showMore")}
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
