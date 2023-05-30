import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import NavLink from "./NavLink";

const NavSocials = () => {
  return (
    <div className="flex gap-6">
      <NavLink
        url="https://github.com/Koloru"
        className="duration-200 ease-in-out hover:rotate-12"
        text={
          <AiFillGithub className="text-3xl cursor-pointer hover:text-purple-600 hover:animate-pulse" />
        }
      />
      <NavLink
        url="https://www.instagram.com/colorspectacle/"
        className="duration-200 ease-in-out hover:rotate-12"
        text={
          <AiFillInstagram className="text-3xl cursor-pointer hover:text-purple-600 hover:animate-pulse" />
        }
      />
      <NavLink
        url="https://www.linkedin.com/in/infanteneil/"
        className="duration-200 ease-in-out hover:rotate-12"
        text={
          <AiFillLinkedin className="text-3xl cursor-pointer hover:text-purple-600 hover:animate-pulse" />
        }
      />
      <NavLink
        url="https://t.me/Koloruuu"
        className="duration-200 ease-in-out hover:rotate-12"
        text={
          <FaTelegramPlane className="text-3xl cursor-pointer hover:text-purple-600 hover:animate-pulse" />
        }
      />
    </div>
  );
};
export default NavSocials;
