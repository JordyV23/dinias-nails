import { useEffect, useRef, useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { sendMessage } from "../utils/utils";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export const Navbar = () => {
  return (
    <>
      <Suspense fallback="Cargando Traducciones...">
        <NavbarComponent />
      </Suspense>
    </>
  );
};

const NavbarComponent = () => {
  const { t } = useTranslation(["welcome"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const navContentRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navContentRef.current &&
        !navContentRef.current.contains(event.target) &&
        !event.target.closest("#nav-toggle")
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={headerRef}
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-white"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <img
                src="LogoLetraN.webp"
                className="h-20 fill-current inline"
                alt="Marca de dinias nails"
              />
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              onClick={toggleMenu}
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            ref={navContentRef}
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-black no-underline transition hover:font-bold"
                  href="#Servicios"
                >
                  <FontAwesomeIcon icon={faBellConcierge} className="mr-1" />
                  {t("navbarOpt1")}
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline transition hover:font-bold py-2 px-4"
                  href="#"
                >
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  {t("navbarOpt2")}
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline transition hover:font-bold py-2 px-4"
                  href="#Ubicacion"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                  {t("navbarOpt3")}
                </a>
              </li>
            </ul>
            <a
              // ref={navActionRef}
              id="navAction"
              className="mx-auto lg:mx-0 mr-3 hover:underline bg-white text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out gradient"
              href={sendMessage()}
              target="_blank"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-1" />
              {t("navbarCTABtn")}
            </a>
            <LanguageSelector/>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </>
  );
};
