import Banner from "../Banner";
import AboutText from "../AboutUsPage/AboutText";
import OurValues from "../AboutUsPage/OurValues";
import Meditation from "../AboutUsPage/Meditation";
import TeamLead from "../AboutUsPage/TeamLead";

const AboutUs = () => {
  return (
    <div>
     <Banner title="ABOUT US"/>
     <AboutText />
     <OurValues />
     <Meditation/>
     <TeamLead/>

    </div>
  );
};

export default AboutUs;
