import { ReactNode } from "react";
import { Link } from "wouter";

const NavLink = ({ text, url }: { text: string | ReactNode; url: string }) => {
  if (url.includes("http")) {
    return (
      <a href={url} className="group" target="_blank">
        <span className=" cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:scale-125">
          {text}
        </span>
      </a>
    );
  } else {
    return (
      <Link href={url} className="group ">
        <span className=" cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:scale-125">
          {text}
        </span>
      </Link>
    );
  }
};
export default NavLink;
