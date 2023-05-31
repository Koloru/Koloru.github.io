import { ReactNode } from "react";
import { Link } from "wouter";

const NavLink = ({
  text,
  url,
  className,
}: {
  text: string | ReactNode;
  url: string;
  className?: string;
}) => {
  if (url.includes("http")) {
    return (
      <a href={url} className={`group ${className}`} target="_blank">
        <span className="group-hover cursor-pointer font-light hover:scale-125 hover:animate-pulse hover:font-bold hover:text-purple-600 hover:shadow-pulse">
          {text}
        </span>
      </a>
    );
  } else {
    return (
      <Link href={url} className="group ">
        <span className="group-hover cursor-pointer font-light hover:scale-125 hover:animate-pulse hover:font-bold hover:text-purple-600 hover:shadow-pulse">
          {text}
        </span>
      </Link>
    );
  }
};
export default NavLink;
