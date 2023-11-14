import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About John" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a seasoned freelancer for Moverz Group with a strong foundation
            in Web 3 decentralized applications, Web 3 solution research and
            front-end technologies. My proficiency extends to managing full
            project lifecycles, aligning tech roadmaps with business goals, and
            ensuring seamless project execution. In addition to my corporate
            role, I've delved into freelancing, tackling diverse projects and
            providing innovative web solutions. My recent work includes
            leveraging NFTs for ticketing, demonstrating my ability to integrate
            cutting-edge blockchain technology with traditional web applications
            cost-effectively. I am also passionate about teaching, having
            accumulated extensive experience in mentoring and guiding teams
            towards success. My dedication to fostering collaborative and
            educational environments has honed my ability to communicate complex
            technical concepts effectively. With a passion for technology and
            continuous learning, I am eager to bring my blend of skills,
            experience, and mentorship to freelance projects, driving innovation
            and delivering exceptional results.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
