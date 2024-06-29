import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["welcome"]);


  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a
                className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <img
                  src="LogoLetraN.webp"
                  className="h-20 fill-current inline"
                  alt="imagen de logo"
                />
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="text-base mr-1"
                />
                {t("footerContact")}
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-base mr-1"
                    />
                    +1 310-357-9601
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-base mr-1"
                    />
                    3719 Gage Ave Bell, CA, United States, 90201
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                <FontAwesomeIcon icon={faGlobe} className="text-base mr-1" />
                {t("footerSocial")}
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://www.instagram.com/chicas__nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-base mr-1"
                    />
                    Instagram
                  </a>
                </li>

                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-base mr-1"
                    />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};
