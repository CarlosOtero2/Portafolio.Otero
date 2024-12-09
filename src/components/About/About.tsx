import AboutHero from './AboutHero';
import Education from './Education';
import Certificates from './Certificates';
import Skills from './Skills';

const About = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <AboutHero />
      <Education />
      <Certificates />
      <Skills />
    </div>
  );
};

export default About;