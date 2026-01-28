import AppNavbar from "./components/AppNavbar.jsx";
import BackToTop from "./components/BackToTop.jsx";
import AppFooter from "./components/AppFooter.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { useTheme } from "./hooks/useTheme.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";
import { siteData } from "./data/siteData.js";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  const sectionItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const sectionIds = sectionItems.map((i) => i.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  useRevealOnScroll();

  return (
    <div>
      <AppNavbar
        brand={siteData.brand}
        items={sectionItems}
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection data={siteData.hero} />
        <AboutSection data={siteData.about} person={siteData.person} />
        <SkillsSection skills={siteData.skills} />
        <ProjectsSection projects={siteData.projects} />
        <ContactSection person={siteData.person} social={siteData.social} />
      </main>

      <AppFooter
        brand={siteData.brand}
        social={siteData.social}
        note={siteData.footerNote}
      />
      <BackToTop />
    </div>
  );
}
