import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";
import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="py-8">
      <Container>
        <div className="lg:flex">
          <div className="lg:w-3/12 ">
            <StaticImage src="../images/Logo.png" alt="Logo" />
          </div>
          <div className="w-9/12">
            <ul className="mt-5 lg:mt-0 lg:flex lg:justify-end lg:gap-x-10 ">
                <li className="font-dm text-sm font-bold hover:font-bold ">
                    <Link to="/home">Home</Link>
                </li>
                <li className="font-dm text-sm font-bold hover:font-bold ">
                    About
                </li>
                <li className="font-dm text-sm font-bold hover:font-bold ">
                    Service
                </li>
                <li className="font-dm text-sm font-bold hover:font-bold ">
                    Contact
                </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
