import { useState } from "react";

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
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "cat-marketplace",
      name: "Cat Marketplace with Native PHP",
      description:
        "Platform e-commerce untuk jual beli kucing dengan berbagai fitur seperti filter, pencarian, dan sistem keranjang belanja.",
      category: "fullstack",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "project1",
      name: "Project 1",
      description:
        "Proyek frontend dengan fokus pada UI/UX modern dan responsif.",
      category: "frontend",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "web-static-uas",
      name: "Web Static UAS",
      description:
        "Website statis untuk keperluan tugas akhir semester dengan desain minimalis.",
      category: "frontend",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "social-media-api",
      name: "Social Media API",
      description:
        "Backend API untuk aplikasi media sosial dengan fitur autentikasi, posting, dan interaksi antar pengguna.",
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
    },
    {
      id: "magic-scroll-api",
      name: "Magic Scroll API",
      description:
        "API untuk aplikasi membaca dengan fitur bookmark, highlights, dan rekomendasi konten.",
      category: "backend",
      techStack: ["Express", "PostgreSQL", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "sistem-informasi-kkn",
      name: "Sistem Informasi Pendaftaran KKN/KKP",
      description:
        "Aplikasi untuk memfasilitasi pendaftaran dan manajemen KKN/KKP mahasiswa.",
      category: "fullstack",
      techStack: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "happiness-overload-api-v1",
      name: "Happiness Overload API v1",
      description:
        "Backend API untuk aplikasi mood tracking dan jurnal kebahagiaan.",
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
    },
    {
      id: "happiness-overload-api-v2",
      name: "Happiness Overload API v2",
      description:
        "Versi yang ditingkatkan dari Happiness Overload API dengan fitur tambahan dan performa yang lebih baik.",
      category: "backend",
      techStack: ["NestJS", "PostgreSQL", "TypeScript", "Prisma"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "magic-scroll-api-v2",
      name: "Magic Scroll API v2",
      description:
        "Versi terbaru dari Magic Scroll API dengan arsitektur yang lebih baik dan fitur tambahan.",
      category: "backend",
      techStack: ["NestJS", "MongoDB", "TypeScript", "Redis"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "big-floppa-api",
      name: "Big Floppa API",
      description:
        "Fun API dengan kumpulan gambar dan fakta tentang kucing Big Floppa.",
      category: "backend",
      techStack: ["Express", "MongoDB", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "simple-flutter-todo",
      name: "Simple Flutter Todo",
      description:
        "Aplikasi todo list sederhana dibuat dengan Flutter untuk Android dan iOS.",
      category: "mobile",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "gun-api-with-flask",
      name: "Gun API with Flask",
      description:
        "API untuk katalog dan informasi tentang senjata api menggunakan Flask.",
      category: "backend",
      techStack: ["Flask", "Python", "SQLAlchemy", "SQLite"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
    },
    {
      id: "uas-mobile",
      name: "UAS Mobile",
      description:
        "Aplikasi mobile yang dibuat untuk tugas akhir semester dengan fokus pada UI/UX.",
      category: "mobile",
      techStack: ["Flutter", "Dart", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
    },
    {
      id: "e-book-api",
      name: "E-Book API with Standardized API",
      description:
        "API untuk aplikasi e-book dengan standar REST API yang konsisten.",
      category: "backend",
      techStack: ["Express", "PostgreSQL", "TypeScript", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "tegar-workshop-server",
      name: "Tegar Workshop Server",
      description:
        "Backend untuk aplikasi manajemen bengkel dengan fitur inventaris dan pelacakan servis.",
      category: "backend",
      techStack: ["Express", "MongoDB", "JWT", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
    {
      id: "rekomendasi-jurusan-laravel",
      name: "Rekomendasi Jurusan Laravel",
      description:
        "Aplikasi untuk membantu calon mahasiswa memilih jurusan berdasarkan minat dan kemampuan.",
      category: "fullstack",
      techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: false,
    },
    {
      id: "car-paint-server",
      name: "Car Paint Server",
      description: "Backend untuk aplikasi katalog warna dan jenis cat mobil.",
      category: "backend",
      techStack: ["Express", "MongoDB", "Node.js"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: false,
      maintained: false,
    },
    {
      id: "project-3",
      name: "Project 3",
      description:
        "Aplikasi mobile dengan fitur interaktif dan animasi modern.",
      category: "mobile",
      techStack: ["Flutter", "Dart", "GetX", "Firebase"],
      image: "/assets/images/rekomendasi-jurusan.png",
      deployed: true,
      maintained: true,
    },
  ];

  const categories = [
    { id: "all", name: "Semua Proyek" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Fullstack" },
    { id: "mobile", name: "Mobile" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Prevent body scroll when modal is open
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section id={id} className="px-4 mx-auto mt-20 max-w-7xl">
      <h2 className="mb-6 text-xl font-semibold text-center">
        <strong className="miku-text-gradient">Proyek</strong> Saya
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              activeCategory === category.id
                ? "bg-primary text-text-inverted"
                : "border border-gray-300 hover:miku-border hover:text-primary"
            }`}
            onClick={() => setActiveCategory(category.id as ProjectCategory)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden transition-all duration-300 rounded-lg shadow-md cursor-pointer bg-bg-element hover:shadow-lg hover:-translate-y-1"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute top-2 right-2">
                <span className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full bg-opacity-70">
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
                    <span className="text-green-500">
                      <i className="mr-1 fas fa-check-circle"></i>deployed
                    </span>
                  ) : (
                    <span className="text-text-tertiary">
                      <i className="mr-1 fas fa-code-branch"></i>development
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-text-secondary">
            Tidak ada proyek dalam kategori ini.
          </p>
        </div>
      )}

      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 overflow-y-auto bg-black bg-opacity-70">
          <div
            className="bg-bg-main rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute text-xl top-4 right-4 text-text-primary hover:text-primary"
              onClick={closeModal}
            >
              <i className="fas fa-times"></i>
            </button>

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
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedProject.category === "frontend"
                      ? "bg-blue-100 text-blue-800"
                      : selectedProject.category === "backend"
                      ? "bg-green-100 text-green-800"
                      : selectedProject.category === "fullstack"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {selectedProject.category}
                </span>
              </div>

              <p className="mb-6 text-text-secondary">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-medium text-primary">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded bg-bg-element"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  {selectedProject.maintained ? (
                    <span className="text-green-500">Maintained</span>
                  ) : (
                    <span className="text-yellow-500">Archived</span>
                  )}
                </div>

                <div>
                  <span className="font-medium">Deployment:</span>{" "}
                  {selectedProject.deployed ? (
                    <span className="text-green-500">Deployed</span>
                  ) : (
                    <span className="text-gray-500">Not Deployed</span>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  className="px-6 py-2 text-white transition-colors rounded bg-primary hover:bg-primary-hover"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
