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
    aria-label={ariaLabel}
    className="transition-transform transform hover:scale-110"
  >
    <img src={src} alt={alt} className="w-8 h-8 mx-2" />
  </a>
);

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* About Section */}
          <div className="space-y-2">
            <h5 className="font-semibold text-lg">About</h5>
            <p className="text-sm">
              Built with <strong className="text-yellow-400">React.js</strong>{" "}
              and <strong className="text-yellow-400">Tailwind CSS</strong>.
            </p>
          </div>

          {/* Contact & Social Links Section */}
          <div className="flex flex-col items-center">
            <h5 className="font-semibold text-lg">Contact</h5>
            <div className="flex space-x-4">
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
          <div className="space-y-2">
            <h5 className="font-semibold text-lg">Resources</h5>
            <div className="flex space-x-4">
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
        <hr className="border-white my-4" />
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
