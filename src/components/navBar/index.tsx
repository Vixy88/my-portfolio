import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  const navLinks = [
    { name: "Front End", link: "/frontend" },
    { name: "Back End", link: "/backend" },
    { name: "Dev Ops", link: "/devops" },
    { name: "Innovation", link: "/innovation" },
    { name: "Leadership", link: "/leadership" },
    { name: "Contact Me", link: "/contact" },
  ];
  return (
    <div className="w-full">
      <nav className="hidden md:flex md:justify-between">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
