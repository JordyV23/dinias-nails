import { useTranslation } from "react-i18next";
import { sendMessage } from "../utils/utils";

/* eslint-disable react/prop-types */
export const Card = ({ title, body }) => {
  
  const { t } = useTranslation(["welcome"]);

  return (
    <>
      <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-gray-100 rounded-t rounded-b-none overflow-hidden shadow pt-4">
          {/* <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          > */}
            {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              xGETTING STARTED
            </p> */}
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              {title}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              {body}
            </p>
          {/* </a> */}
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            <a className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" href={sendMessage()} target="_blank">
              {t("servCTABtn")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
