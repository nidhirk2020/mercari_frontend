import Banner from "../Banner";
import AboutText from "../AboutUsPage/AboutText";
import OurValues from "../AboutUsPage/OurValues";
import Meditation from "../AboutUsPage/Meditation";
import TeamLead from "../AboutUsPage/TeamLead";
import OurValuesMobile from "../AboutUsPage/OurValuesMobile";

const AboutUs = () => {
  return (
    <div>
      <Banner title="ABOUT US" />
      <AboutText />
      
      {/* Responsive Values Section */}
      <div className="hidden md:block"> {/* Show OurValues on medium and larger screens */}
        <OurValues />
      </div>
      <div className="block md:hidden"> {/* Show OurValuesMobile on small screens */}
        <OurValuesMobile />
      </div>
      
      <Meditation />
      <TeamLead />
    </div>
  );
};

export default AboutUs;
