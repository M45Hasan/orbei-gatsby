import * as React from "react";
import Container from "./Container";

import FooterLink from "./FooterLink";
import { FooterHead } from "./FooterHead";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const FooterTop = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-[13%]">
          <FooterHead>Menu</FooterHead>
          <ul>
            <FooterLink itemName="Home" href="/" />
            <FooterLink itemName="Shop" href="/products" />
            <FooterLink itemName="About" href="#" />
            <FooterLink itemName="Contact" href="#" />
            <FooterLink itemName="Journal" href="#" />
          </ul>
        </div>
        <div className="w-[13%]">
          <FooterHead>Shop</FooterHead>
          <ul>
            <FooterLink itemName="Category1" href="#" />
            <FooterLink itemName="Category2" href="#" />
            <FooterLink itemName="Category3" href="#" />
            <FooterLink itemName="Category4" href="#" />
            <FooterLink itemName="Category5" href="#" />
          </ul>
        </div>
        <div className="w-[13%]">
          <FooterHead>Help</FooterHead>
          <ul>
            <FooterLink itemName="Policy" href="#" />
            <FooterLink itemName="Conditions" href="#" />
            <FooterLink itemName="Special E-shopt" href="#" />
            <FooterLink itemName="Shipping" href="#" />
            <FooterLink itemName="Secure Payments" href="#" />
          </ul>
        </div>
        <div className=" w-[35%] justify-end sm:flex md:flex block  ">
          <div className=" sm:block md:block block ">
            <div className="ml-[]">
              <StaticImage src="../images/logo.png" />
            </div>
            <div className="mt-[20%]">
              <FooterHead>
                <Link to="tel:(052)(611)p(5711)">(052) 611-5711</Link>
                <br />
                <Link to="mailto:company@domain.com">company@domain.com</Link>
              </FooterHead>
              <p className="font-regular mt-[4px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
        </div>
        <div className="hidden w-[9%] xl:block "></div>
      </div>
    </Container>
  );
};

export default FooterTop;
