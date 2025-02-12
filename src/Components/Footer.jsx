import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

// Reusable Footer Icon component
const FooterIconLink = ({ href, src, alt, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="transition-transform transform hover:scale-110"
  >
    <img src={src} alt={alt} className="w-8 h-8 mx-2" />
  </a>
);

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="text-center md:text-left space-y-2">
            <h5 className="font-semibold text-lg">Information</h5>
            <p className="text-sm">
              Built with <strong className="text-yellow-400">React.js</strong>{" "}
              and <strong className="text-yellow-400">Tailwind CSS</strong>.
            </p>
            {/* Updated "About Me" Button */}
            <a
              href="https://saisrikanthchodimella.github.io/ReactPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              About Me
            </a>
          </div>

          {/* Contact & Social Links Section */}
          <div className="text-center space-y-2">
            <h5 className="font-semibold text-lg">Contact</h5>
            <div className="flex justify-center space-x-4">
              <FooterIconLink
                href="mailto:saisrikanthchodimella@gmail.com"
                src={Gmail}
                alt="Gmail Icon"
                ariaLabel="Gmail"
              />
              <FooterIconLink
                href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
                src={Linkedin}
                alt="LinkedIn Icon"
                ariaLabel="LinkedIn"
              />
            </div>
          </div>

          {/* Resource Links Section */}
          <div className="text-center space-y-2">
            <h5 className="font-semibold text-lg">Resources</h5>
            <div className="flex justify-center space-x-4">
              <FooterIconLink
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                src={Git}
                alt="Git Icon"
                ariaLabel="Git"
              />
              <FooterIconLink
                href="https://tailwindui.com/"
                src={TailWind}
                alt="Tailwind Icon"
                ariaLabel="Tailwind"
              />
              <FooterIconLink
                href="https://react.dev/"
                src={ReactJS}
                alt="ReactJS Icon"
                ariaLabel="ReactJS"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-700 my-4" />
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear} Sai Srikanth Chodimella. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
