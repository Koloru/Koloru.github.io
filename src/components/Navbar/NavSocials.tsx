import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import NavLink from "./NavLink";

const NavSocials = () => {
  return (
    <div className="flex gap-6">
      <NavLink
        url="https://github.com/Koloru"
        text={
          <AiFillGithub className="cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl" />
        }
      />
      <NavLink
        url="https://www.instagram.com/colorspectacle/"
        text={
          <AiFillInstagram className="cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl" />
        }
      />
      <NavLink
        url="https://www.linkedin.com/in/infanteneil/"
        text={
          <AiFillLinkedin className="cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl" />
        }
      />
      <NavLink
        url="https://t.me/Koloruuu"
        text={
          <FaTelegramPlane className="cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl" />
        }
      />
    </div>
  );
};
export default NavSocials;
