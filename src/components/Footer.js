import * as React from "react";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "gatsby";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-11 h-[374px] bg-[#F5F5F3] py-12 md:mt-14 lg:mt-24 xl:mt-[140px] ">
      <FooterTop />

      <div className="xl:mx-16 mx-[10px] lg:mx-[13px] md:mx-[17px] lg:mt-[65px] mt-[34px] flex justify-between">
        <div className="w-[92px] flex justify-between">
          <Link to="#">
            <TfiFacebook />
          </Link>
          <Link to="#">
            <TfiLinkedin />
          </Link>
          <Link to="#">
            <RiInstagramFill />
          </Link>
        </div>
       
        <p className="rext-[#6D6D6D] font-dm text-[14px] font-normal">
        <span> © {new Date().getFullYear()}</span>  Orebi Minimal eCommerce Figma Template by Adveits
        </p>
      </div>
    </div>
  );
};

export default Footer;
