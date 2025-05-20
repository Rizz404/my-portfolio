import { useState } from "react";

type Skill = { name: string; icon: string };
type SkillsByCategory = {
  all: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
};

const SkillsSection = () => {
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
    <section className="mt-20 max-w-4xl mx-auto">
      <h2 className="text-center text-xl font-semibold mb-6">
        My <strong className="miku-text-gradient">Technical Skills</strong>
      </h2>

      <div className="flex justify-center mb-8 space-x-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-text-inverted"
                : "border border-gray-300 hover:miku-border hover:text-primary"
            }`}
            onClick={() => setActiveCategory(category.id as Category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-text-primary max-w-4xl mx-auto">
        {skills[activeCategory].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-300 rounded p-4 hover:bg-bg-hover hover:miku-border transition-colors"
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
