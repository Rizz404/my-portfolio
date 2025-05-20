import { useState } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { motion, AnimatePresence } from "framer-motion";

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
};

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const { t } = useLocalization();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

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

  // For mobile view, limit the number of projects shown initially
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

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
                  <span className="px-3 py-1 text-xs font-semibold rounded bg-opacity-80 text-text-inverted bg-secondary">
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
                  <div className="flex gap-1">
                    {project.techStack.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-bg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded bg-bg-muted">
                        +{project.techStack.length - 2}
                      </span>
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

      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-8">
          <motion.button
            className="px-6 py-2 text-sm font-medium rounded text-text-inverted bg-secondary hover:bg-secondary-hover"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll
              ? t("projects.showLess") || "Show Less"
              : t("projects.showMore") || "Show More"}
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 overflow-y-auto backdrop-blur-md bg-bg-main bg-opacity-70"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-bg-main rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.button
                className="absolute text-xl top-4 right-4 text-text-primary hover:text-primary"
                onClick={closeModal}
                aria-label={t("projects.closeModalAriaLabel")}
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>

              <div className="w-full h-64 overflow-hidden sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-semibold">
                    {selectedProject.name}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-text-inverted bg-primary">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="mb-6 text-text-secondary">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-medium text-primary">
                    {t("projects.techStackHeading")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-sm rounded bg-bg-element"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: idx * 0.05 },
                        }}
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="font-medium">
                      {t("projects.status.label")}:
                    </span>{" "}
                    {selectedProject.maintained ? (
                      <span className="text-primary">
                        {t("projects.status.maintained")}
                      </span>
                    ) : (
                      <span className="text-accent">
                        {t("projects.status.archived")}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="font-medium">
                      {t("projects.deployment.label")}:
                    </span>{" "}
                    {selectedProject.deployed ? (
                      <span className="text-primary">
                        {t("projects.deployment.deployed")}
                      </span>
                    ) : (
                      <span className="text-text-tertiary">
                        {t("projects.deployment.notDeployed")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <motion.button
                    className="px-6 py-2 transition-colors rounded text-text-inverted bg-primary hover:bg-primary-hover"
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("projects.closeButton")}
                  </motion.button>
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
