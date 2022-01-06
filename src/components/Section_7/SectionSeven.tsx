import "./SectionSeven.scss";
import LinkedinSvg from "../media/linkedin.svg";
import InstagramSvg from "../media/instagram.svg";
import FacebookSvg from "../media/facebook.svg";

export default function SectionSeven() {
  return (
    <footer
      id="footer"
      className="footer w-full flex justify-center items-center flex-col"
    >
      <div className="footer_wrapper w-full flex justify-evenly items-center flex-col">
        <h1 className="flex justify-center items-center text-center text-3xl font-bold mb-11">
          Follow us on
        </h1>
        <div className="social_wrapper flex justify-evenly items-center">
          <a
            href="_"
            target="_blank"
            className="  flex justify-center items-center p-1"
          >
            <img src={FacebookSvg} alt="socials" className="w-12" />
          </a>
          <a
            href="_"
            target="_blank"
            className="  flex justify-center items-center p-1"
          >
            <img src={LinkedinSvg} alt="socials" className="w-12" />
          </a>
          <a
            href="_"
            target="_blank"
            className="  flex justify-center items-center p-1"
          >
            <img src={InstagramSvg} alt="socials" className="w-12" />
          </a>
        </div>
        <p className="w-full flex justify-center items-center text-center mt-28">
          © Copyright IncCult 2021-2022
        </p>
        <div className="footer_bottom w-full h-1 mt-4"></div>
      </div>
    </footer>
  );
}
