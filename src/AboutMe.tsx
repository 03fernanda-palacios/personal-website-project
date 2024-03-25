import './AboutMe.css'

const gifUrl = '../public/F.gif';

function AboutMe() {
  return (
    <div className="about-container">
    <img src={gifUrl} alt="Local GIF" />
    <div className="center-text">
      <h1>Hello I'm Fernanda! Welcome to Ferns World! <br/><br/></h1>
      <p>
          I'm an aspiring software engineer. As of now, I consider myself to be a technologist 
          as technology and its impacts have been one of the most interesting things to me since 
          I was a young girl especially having grown up in the Silicon Valley. Currently, I am part of San Jose 
          State University's class of 2026. So far, I've declared a major in Engineering Technology 
          and minors in Computer Science as well as Business. I hope this makes me a well-rounded 
          candidate for impactful technology-oriented roles in the future! In my time at SJSU so 
          far, I've had the privilage of serving as the former Events Director, Vice President, and 
          current President for our Girls Who Code chapter. In the upcoming fall I'll also take on the role of Treasurer for 
          our schools Society of Latino Engineers and Scientists, after having reaped so many benefits from this community 
          for two years and winning the election for this role last month. I've worked service jobs at places like 
          Jamba Juice as well as technical SWE internships at places like Salesforce. Why I chose the college route 
          is because I'm commited to gaining exposure to how this world works in order to make good tech. 
          Good tech is a result of questioning the technological tools we use as well as the ones we create.
          I want to do both. Additionally, I knew it would be a challenge for someone like me coming from a 
          first generation background. Something challenging I'm engaged with right now is helping out at Professor 
          Ben Reeds Disconnected Data Distribution lab, where we aim to provide internet services to disconnected areas
          worldwide by creating quality, scalable, open-source code, leveraging Android phones for mobile transport. 
      </p>
      </div>
    </div>
  );
}

export default AboutMe;
