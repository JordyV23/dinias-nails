import { sendMessage } from "../utils/utils";

export const Hero = () => {
  return (
    <>
      <div className="pt-24">
        <div className="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-left">
            <p className="uppercase tracking-loose w-full pt-4">
              Su mejor opción
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Haz a tus uñas lucir bien!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Ven y visitanos y tus uñas quedarán sin igual con nuestros hermosos diseños
            </p>
            <a className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" href={sendMessage()} target="_blank">
              Agendar una cita
            </a>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-2/5 flex justify-end items-center mt-8 md:mt-0">
            <img
              className="w-full md:w-3/4 rounded-tl-lg rounded-br-lg"
              src="work/nails1.webp"
              alt="Nail art"
            />
          </div>
        </div>
      </div>
    </>
  );
};
