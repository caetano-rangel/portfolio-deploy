import '../styles/components/socialnet.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetworks = [
    { name: "linkedin", ref: "https://www.linkedin.com/in/caetano-rangel/", icon: <FaLinkedinIn /> },
    { name: "github", ref: "https://github.com/caetano-rangel", icon: <FaGithub /> },
    { name: "instagram", ref: "https://www.instagram.com/", icon: <FaInstagram /> },
  ];

function SocialNet() {
  return <section id="social-networks">
        {socialNetworks.map((network) => (
        <a href={network.ref} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
}

export default SocialNet