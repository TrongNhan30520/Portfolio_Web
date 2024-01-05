import AboutBlock from "@/components/about";
import ContactBlock from "@/components/contact";
import ExperienceBlock from "@/components/experience";
import IntroBlock from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import SkillsBlock from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroBlock />
      <SectionDivider />
      <AboutBlock />
      <Projects />
      <SkillsBlock />
      <ExperienceBlock />
      <ContactBlock />
    </main>
  );
}
