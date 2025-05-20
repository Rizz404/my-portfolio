import { useState } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsSectionProps {
  id: string;
}

type Skill = { name: string; icon: string };
type SkillsByCategory = {
  all: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
};

const SkillsSection = ({ id }: SkillsSectionProps) => {
  type Category = "all" | "backend" | "database" | "tools";
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLocalization();

  const skills: SkillsByCategory = {
    all: [],
    backend: [
      { name: "Express", icon: "fas fa-server" },
      { name: "NestJS", icon: "fas fa-cogs" },
      { name: "Flask", icon: "fas fa-flask" },
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "JWT", icon: "fas fa-key" },
    ],
    database: [
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "Prisma", icon: "fas fa-layer-group" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "Firebase", icon: "fas fa-fire" },
      { name: "SQLAlchemy", icon: "fas fa-flask" },
      { name: "SQLite", icon: "fas fa-database" },
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Postman", icon: "fas fa-paper-plane" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "VS Code", icon: "fas fa-code" },
    ],
  };

  skills.all = [...skills.backend, ...skills.database, ...skills.tools];

  const categories = [
    { id: "all", name: t("skills.categories.all") || "All Skills" },
    { id: "backend", name: t("skills.categories.backend") || "Backend & API" },
    { id: "database", name: t("skills.categories.database") || "Database" },
    { id: "tools", name: t("skills.categories.tools") || "Tools" },
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
                <i className={`${skill.icon} text-2xl mb-2 text-primary`}></i>
                <span className="text-xs font-semibold text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {skills[activeCategory].length > 6 && (
        <div className="flex justify-center mt-4">
          <motion.button
            className="px-4 py-2 text-sm font-medium rounded text-text-inverted bg-secondary hover:bg-secondary-hover"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll
              ? t("skills.showLess") || "Show Less"
              : t("skills.showMore") || "Show More"}
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
