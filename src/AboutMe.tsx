import './AboutMe.css'

const gifUrl = '../public/F.gif';

function AboutMe() {
  return (
    <div className="about-container">
    <img src={gifUrl} alt="Local GIF" />
    <div className="center-text">
      <h1>Hello I'm Fernanda! Welcome to my corner of the internet 💜</h1>
      <p>
          I am an aspiring software engineer, or maybe product manager, or maybe startup founder. Guaranteed, I will be a technologist as technology and its impacts have been one of the most interesting things to me since I was a young girl. Currently, I am part of San Jose State University's class of 2026. So far, I've declared a major in Engineering Technology and minors in Computer Science as well as Business. I hope this makes me a well-rounded candidate for impactful technology-oriented roles in the future! In my time at SJSU so far, I've had the privilage of serving as the Events Director, Vice President, and President for our Girls Who Code chapter. I've worked service jobs at places like Jamba Juice as well as technical SWE internships at places like Salesforce. 
      </p>
      </div>
    </div>
  );
}

export default AboutMe;
