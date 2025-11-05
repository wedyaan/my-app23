// Footer.tsx
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-10 pb-10">
      <a 
        href="https://github.com/wedyaan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center mx-4"
      >
        <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
      </a>
      <a 
        href="https://www.linkedin.com/in/wedyaan-aloufi/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center mx-4"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
      </a>
      <a 
        href="https://x.com/wedyan_14" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center mx-4"
      >
        <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
      </a>
    </footer>
  );
};

export default Footer;AbortSignal