import { useState } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { motion, AnimatePresence } from "framer-motion";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const categoryStyles: Record<ProjectCategory, string> = {
  all: "bg-secondary text-secondary",
  frontend: "bg-primary text-text-primary",
  backend: "bg-accent text-text-primary",
  fullstack: "bg-bg-alt text-text-primary",
  mobile: "bg-secondary text-text-primary",
};

const techIcons: Record<string, string> = {
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  TailwindCSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  jQuery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  NestJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  Prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  SQLAlchemy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  GetX: "https://raw.githubusercontent.com/jonataslaw/getx-community/master/get.png", // Contoh custom icon
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  exit: { opacity: 0, scale: 0.95 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ProjectsSectionProps {
  id: string;
}

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "mobile";

type Project = {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  image: string;
  deployed: boolean;
  maintained: boolean;
  repoUrl?: string; // URL ke repo GitHub
  liveUrl?: string; // URL ke website/demo live
};

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const { t } = useLocalization();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const breakpoint = useBreakpoint();

  const projects: Project[] = [
    {
      id: "cat-marketplace",
      name: t("projects.catMarketplace.name"),
      description: t("projects.catMarketplace.description"),
      category: "fullstack",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "project1",
      name: t("projects.project1.name"),
      description: t("projects.project1.description"),
      category: "frontend",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "web-static-uas",
      name: t("projects.webStaticUAS.name"),
      description: t("projects.webStaticUAS.description"),
      category: "frontend",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "social-media-api",
      name: t("projects.socialMediaApi.name"),
      description: t("projects.socialMediaApi.description"),
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "magic-scroll-api",
      name: t("projects.magicScrollApi.name"),
      description: t("projects.magicScrollApi.description"),
      category: "backend",
      techStack: ["Express", "PostgreSQL", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "sistem-informasi-kkn",
      name: t("projects.sistemInformasiKKN.name"),
      description: t("projects.sistemInformasiKKN.description"),
      category: "fullstack",
      techStack: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "happiness-overload-api-v1",
      name: t("projects.happinessOverloadApiV1.name"),
      description: t("projects.happinessOverloadApiV1.description"),
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "happiness-overload-api-v2",
      name: t("projects.happinessOverloadApiV2.name"),
      description: t("projects.happinessOverloadApiV2.description"),
      category: "backend",
      techStack: ["NestJS", "PostgreSQL", "TypeScript", "Prisma"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "magic-scroll-api-v2",
      name: t("projects.magicScrollApiV2.name"),
      description: t("projects.magicScrollApiV2.description"),
      category: "backend",
      techStack: ["NestJS", "MongoDB", "TypeScript", "Redis"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "big-floppa-api",
      name: t("projects.bigFloppaApi.name"),
      description: t("projects.bigFloppaApi.description"),
      category: "backend",
      techStack: ["Express", "MongoDB", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "simple-flutter-todo",
      name: t("projects.simpleFlutterTodo.name"),
      description: t("projects.simpleFlutterTodo.description"),
      category: "mobile",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "gun-api-with-flask",
      name: t("projects.gunApiWithFlask.name"),
      description: t("projects.gunApiWithFlask.description"),
      category: "backend",
      techStack: ["Flask", "Python", "SQLAlchemy", "SQLite"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "uas-mobile",
      name: t("projects.uasMobile.name"),
      description: t("projects.uasMobile.description"),
      category: "mobile",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "e-book-api",
      name: t("projects.eBookApi.name"),
      description: t("projects.eBookApi.description"),
      category: "backend",
      techStack: ["Express", "PostgreSQL", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "tegar-workshop-server",
      name: t("projects.tegarWorkshopServer.name"),
      description: t("projects.tegarWorkshopServer.description"),
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "rekomendasi-jurusan-laravel",
      name: t("projects.rekomendasiJurusanLaravel.name"),
      description: t("projects.rekomendasiJurusanLaravel.description"),
      category: "fullstack",
      techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "car-paint-server",
      name: t("projects.carPaintServer.name"),
      description: t("projects.carPaintServer.description"),
      category: "backend",
      techStack: ["Express", "MongoDB", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
    {
      id: "project-3",
      name: t("projects.project3.name"),
      description: t("projects.project3.description"),
      category: "mobile",
      techStack: ["Flutter", "Dart", "GetX", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
      repoUrl: "https://github.com/user/repo",
      liveUrl: "https://project-live-url.com",
    },
  ];

  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "frontend", name: t("projects.categories.frontend") },
    { id: "backend", name: t("projects.categories.backend") },
    { id: "fullstack", name: t("projects.categories.fullstack") },
    { id: "mobile", name: t("projects.categories.mobile") },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  let initialLimit;
  switch (breakpoint) {
    case "xl":
      initialLimit = 8;
      break;
    case "md":
      initialLimit = 6;
      break;
    default: // sm
      initialLimit = 2;
      break;
  }

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialLimit);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setShowAll(false); // Reset showAll when changing categories
  };

  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section id={id} className="px-4 mx-auto mt-20 max-w-7xl">
      <motion.h2
        className="mb-6 text-xl font-semibold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <strong className="miku-text-gradient">{t("projects.heading1")}</strong>{" "}
        {t("projects.heading2")}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-text-inverted"
                : "border border-secondary hover:border-primary hover:text-primary"
            }`}
            onClick={() => handleCategoryChange(category.id as ProjectCategory)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="overflow-hidden transition-all duration-300 rounded-md shadow-md cursor-pointer bg-bg-element hover:shadow-lg"
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.05, duration: 0.3 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      categoryStyles[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    {project.techStack.slice(0, 4).map((tech) =>
                      techIcons[tech] ? (
                        <img
                          key={tech}
                          src={techIcons[tech]}
                          alt={tech}
                          title={tech} // Tooltip nama tech saat hover
                          className="w-5 h-5"
                        />
                      ) : null
                    )}
                    {project.techStack.length > 4 && (
                      <div className="flex items-center justify-center w-5 h-5 text-xs rounded-full bg-bg-muted text-text-muted">
                        +{project.techStack.length - 4}
                      </div>
                    )}
                  </div>
                  <span className="text-xs">
                    {project.deployed ? (
                      <span className="text-primary">
                        <i className="mr-1 fas fa-check-circle"></i>
                        {t("projects.status.deployed")}
                      </span>
                    ) : (
                      <span className="text-text-tertiary">
                        <i className="mr-1 fas fa-code-branch"></i>
                        {t("projects.status.development")}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-text-secondary">{t("projects.noProjectsFound")}</p>
        </div>
      )}

      {filteredProjects.length > initialLimit && (
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

      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 overflow-y-auto backdrop-blur-md bg-bg-main/80"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-bg-alt rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-bg-muted flex flex-col"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="sticky top-0 z-10 flex justify-end p-2 bg-bg-alt/80 backdrop-blur-sm">
                <motion.button
                  className="flex items-center justify-center w-8 h-8 rounded-full text-text-secondary hover:bg-bg-muted hover:text-primary"
                  onClick={closeModal}
                  aria-label={t("projects.closeModalAriaLabel")}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                >
                  <i className="fas fa-times"></i>
                </motion.button>
              </div>

              <div className="flex-grow p-6 pt-0 md:p-8 md:pt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* --- KOLOM KIRI: GAMBAR & TOMBOL AKSI --- */}
                  <motion.div variants={itemVariants}>
                    <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="flex gap-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center btn btn-primary"
                        >
                          Live Demo{" "}
                          <i className="ml-2 fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {selectedProject.repoUrl && (
                        <a
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center btn btn-secondary"
                        >
                          Source Code <i className="ml-2 fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* --- KOLOM KANAN: DETAIL PROYEK --- */}
                  <motion.div variants={itemVariants}>
                    <span
                      className={`px-3 py-1 mb-3 inline-block text-sm font-bold rounded-full ${
                        categoryStyles[selectedProject.category]
                      }`}
                    >
                      {selectedProject.category}
                    </span>
                    <h3 className="mb-3 text-3xl font-bold text-text-primary">
                      {selectedProject.name}
                    </h3>
                    <p className="mb-6 leading-relaxed text-text-secondary">
                      {selectedProject.description}
                    </p>

                    <h4 className="mb-3 text-lg font-semibold text-text-primary">
                      {t("projects.techStackHeading")}
                    </h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-1 rounded-md bg-bg-element"
                        >
                          <img
                            src={techIcons[tech]}
                            alt={tech}
                            className="w-5 h-5"
                          />
                          <span className="text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-md bg-bg-element">
                      <div className="flex justify-between">
                        <div>
                          <span className="block text-sm font-medium text-text-muted">
                            {t("projects.status.label")}
                          </span>
                          <span
                            className={`font-semibold ${
                              selectedProject.maintained
                                ? "text-primary"
                                : "text-accent"
                            }`}
                          >
                            {selectedProject.maintained
                              ? t("projects.status.maintained")
                              : t("projects.status.archived")}
                          </span>
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-text-muted">
                            {t("projects.deployment.label")}
                          </span>
                          <span
                            className={`font-semibold ${
                              selectedProject.deployed
                                ? "text-primary"
                                : "text-text-tertiary"
                            }`}
                          >
                            {selectedProject.deployed
                              ? t("projects.deployment.deployed")
                              : t("projects.deployment.notDeployed")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
