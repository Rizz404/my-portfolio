import { useState } from "react";

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
      { name: "PostgreSQL", icon: "fas fa-elephant" },
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
    { id: "all", name: "All Skills" },
    { id: "backend", name: "Backend & API" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools" },
  ];

  return (
    <section id={id} className="max-w-4xl mx-auto mt-20">
      <h2 className="mb-6 text-xl font-semibold text-center">
        My <strong className="miku-text-gradient">Technical Skills</strong>
      </h2>

      <div className="flex flex-wrap justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors cursor-pointer ${
              activeCategory === category.id
                ? "bg-primary-active text-text-inverted"
                : "border border-secondary hover:border-secondary-hover hover:text-primary"
            }`}
            onClick={() => setActiveCategory(category.id as Category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto sm:grid-cols-4 md:grid-cols-6 text-text-primary">
        {skills[activeCategory].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 transition-colors border rounded cursor-pointer border-secondary hover:bg-bg-hover hover:border-secondary-hover"
          >
            <i className={`${skill.icon} text-2xl mb-2 text-primary`}></i>
            <span className="text-xs font-semibold text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
