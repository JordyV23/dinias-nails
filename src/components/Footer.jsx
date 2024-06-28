import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
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
                {/* <!--Icon from: http://www.potlabicons.com/ --> */}
                <img
                  src="LogoLetraN.webp"
                  className="h-12 fill-current inline"
                  alt="imagen de logo"
                />
                {/* <svg
                  className="h-8 fill-current inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                  />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                LANDING */}
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="text-base mr-1"
                />
                Contacto
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
            {/* <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                <FontAwesomeIcon icon={faGlobe} className="text-base mr-1" />
                Social
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
                {/* <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Linkedin
                  </a>
                </li> */}
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
            {/* <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};
