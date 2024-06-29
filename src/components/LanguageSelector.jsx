import { useState } from "react";
import { US, ES } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", name: "Español", flag: ES },
  { code: "en", name: "English", flag: US },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const { i18n } = useTranslation(["welcome"]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    console.log(selectedLanguage);
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-right">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-end w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            {selectedLanguage.name}
            <selectedLanguage.flag className="w-5 h-5 ml-2" />
          </span>
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className="flex items-center justify-end px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                role="menuitem"
                onClick={() => selectLanguage(language)}
              >
                {language.name}
                <language.flag className="w-5 h-5 ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
