import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      <Header />
      <main className="container px-6">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
export default App;
