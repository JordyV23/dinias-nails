import { Card } from "./Card";

export const CardSection = () => {
  return (
    <>
      <section className="bg-white border-b py-8" id="Servicios">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Servicios
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Card
            title={"Manicure"}
            body={
              "Uñas perfectamente pintadas para un look elegante y cuidado."
            }
          />
          <Card
            title={"Pedicure"}
            body={
              "Dale color y vida a tus pies con nuestro experto pintado de uñas."
            }
          />
          <Card
            title={"Uñas Acrílicas"}
            body={
              "Extensiones duraderas con pintado personalizado para un estilo único."
            }
          />
          <Card
            title={"Gel X"}
            body={
              "Pintado en gel que mantiene tus uñas impecables por semanas."
            }
          />
        </div>
      </section>
    </>
  );
};
