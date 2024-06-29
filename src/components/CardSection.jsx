import { Suspense } from "react";
import { Card } from "./Card";
import { useTranslation } from "react-i18next";

export const CardSection = () => {
  return (
    <>
      <Suspense fallback="Cargando Traducciones...">
        <Section />
      </Suspense>
    </>
  );
};

const Section = () => {
  const { t } = useTranslation(["welcome"]);
  return (
    <>
      <section className="bg-white border-b py-8" id="Servicios">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            {t("servTitle")}
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Card title={t("servSub1")} body={t("serv1")} />
          <Card title={t("servSub2")} body={t("serv2")} />
          <Card title={t("servSub3")} body={t("serv3")} />
          <Card title={t("servSub4")} body={t("serv4")} />
        </div>
      </section>
    </>
  );
};
