/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { Navbar } from "flowbite-react";
import LanguageSelector from "./LanguageSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faCalendarCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { sendMessage } from "../utils/utils";

export const NavComponent = () => {
  return (
    <>
      <Suspense fallback="Cargando Traducciones...">
        <NavbarComponent />
      </Suspense>
    </>
  );
};

const CtaBtn = ({ t }) => {
  return (
    <>
      <a
        className="py-4 px-6 gradient mr-3 rounded-full"
        href={sendMessage()}
        target="_blank"
      >
        <FontAwesomeIcon icon={faCalendarCheck} className="mr-1" />
        {t("navbarCTABtn")}
      </a>
    </>
  );
};

const NavbarComponent = () => {
  const { t } = useTranslation(["welcome"]);

  return (
    <>
      <Navbar fluid rounded className="sticky top-0 z-10 bg-white shadow-md">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/LogoLetraN.webp"
            className="mr-3 h-14 sm:h-20"
            alt="Flowbite React Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
        </Navbar.Brand>
        <div className="flex justify-center items-center md:order-2">
          <CtaBtn t={t} />
          <LanguageSelector />
          <Navbar.Toggle className="ml-2" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#Servicios">
            <FontAwesomeIcon icon={faBellConcierge} className="mr-1" />
            {t("navbarOpt1")}
          </Navbar.Link>
          <Navbar.Link href="#Horario">
            <FontAwesomeIcon icon={faClock} className="mr-1" />
            {t("navbarOpt2")}
          </Navbar.Link>
          <Navbar.Link href="#Ubicacion">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            {t("navbarOpt3")}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
