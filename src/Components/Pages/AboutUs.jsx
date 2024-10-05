import Banner from "../Banner";
import AboutText from "../AboutUsPage/AboutText";
import Meditation from "../AboutUsPage/Meditation";
import TeamLead from "../AboutUsPage/TeamLead";

const AboutUs = () => {
  return (
    <div className="pt-24">
     <Banner title="ABOUT US"/>
     <AboutText />
     <Meditation/>
     <TeamLead/>

    </div>
  );
};

export default AboutUs;
