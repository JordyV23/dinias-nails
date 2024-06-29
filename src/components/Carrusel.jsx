import { Carousel } from "flowbite-react";
import { useTranslation } from "react-i18next";

export const Carrusel = () => {
  const { t } = useTranslation(["welcome"]);

  return (
    <>
      <div className="mx-4 my-6 md:mx-10 md:my-10">
        <h2 className="w-full my-4 text-3xl md:text-5xl font-bold leading-tight text-center text-white">
          {t("workTitle")}
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="order-2 md:order-1 h-64 md:h-auto xl:h-[400px] 2xl:h-96">
            <Carousel>
              <img
                src="work/nails2.webp"
                alt="..."
                className="w-full h-full object-cover"
              />
              <img
                src="work/nails3.webp"
                alt="..."
                className="w-full h-full object-cover"
              />
              <img
                src="work/nails4.webp"
                alt="..."
                className="w-full h-full object-cover"
              />
            </Carousel>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="w-full my-4 text-2xl md:text-3xl font-bold leading-tight text-center text-white">
              {t("workSubTile")}
            </h2>
            <h3 className="w-full my-4 text-base md:text-xl font-thin leading-tight text-center text-white">
              {t("workText")}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
