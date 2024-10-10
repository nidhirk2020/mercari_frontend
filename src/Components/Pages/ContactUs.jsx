// import MergedComponent from '../ContactUsPage/MergedComponent'; 
import QuestionText from "../ContactUsPage/QuestionText";
import Icons from "../ContactUsPage/Icons";
import ContactForm from "../ContactUsPage/ContactForm";
// import MergedComponent from '../ContactUsPage/MergedComponent';
import bgimage from "../../assets/abstract.jpg";

const ContactUs = () => {
  return (
    <div>
      <QuestionText />
      <div
        className="bg-cover bg-center bg-no-repeat p-8 "
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <Icons />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
