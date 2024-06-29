import { Carousel } from "flowbite-react";
import { useTranslation } from "react-i18next";

export const Carrusel = () => {
  const { t } = useTranslation(["welcome"]);
  
  return (
    <>
      <div className="mx-10 my-10">
        <h2 className="w-full my-4 text-5xl md:text- font-bold leading-tight text-center text-white">
          {t("workTitle")}
        </h2>
        <div className="grid h-64 grid-cols-2 gap-4 sm:h-64 xl:h-[400px] 2xl:h-96">
          <Carousel>
            <img
              src="work/nails2.webp"
              alt="..."
            />
            <img
              src="work/nails3.webp"
              alt="..."
            />
            <img
              src="work/nails4.webp"
              alt="..."
            />

          </Carousel>
          <div>
            <h2 className="w-full my-4 text-3xl font-bold leading-tight text-center text-white">{t("workSubTile")}</h2>
            <h3 className="w-full my-4 text-1xl font-thin leading-tight text-center text-white">{t("workText")}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
