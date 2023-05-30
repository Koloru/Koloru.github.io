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
        <span className="font-light cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 hover:font-bold hover:scale-125">
          {text}
        </span>
      </a>
    );
  } else {
    return (
      <Link href={url} className="group ">
        <span className="font-light cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 hover:font-bold hover:scale-125">
          {text}
        </span>
      </Link>
    );
  }
};
export default NavLink;
