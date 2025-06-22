import AboutMeSection from "./components/partials/AboutMeSection";
import ContactSection from "./components/partials/ContactSection";
import ExperienceSection from "./components/partials/ExperienceSection";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import HeroSection from "./components/partials/HeroSection";
import ProjectsSection from "./components/partials/ProjectsSection";
import SkillsSection from "./components/partials/SkillsSection";
import AppWrapper from "./components/ui/AppWrapper";
import ScrollToTopButton from "./components/ui/ScrollTopButton";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <main className="container px-6">
        <HeroSection id="hero" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <AboutMeSection id="about-me" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </AppWrapper>
  );
};

export default App;
