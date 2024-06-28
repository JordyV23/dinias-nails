export const CallToAction = () => {
  return (
    <>
      <section
        className="container mx-auto text-center py-6 mb-12 px-4"
        id="Ubicacion"
      >
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Ven y Visitanos
        </h2>
        <p>Visitanos de 8:00 a.m. a 5:00 p.m de Lunes a Viernes</p>
        <p>Nos ubicamos en 3719 E Gage Ave Bell, California, EE. UU, 90201</p>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">Estamos esperándote!</h3>
        <div className="w-full max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.78151553085365!2d-118.19901954637776!3d33.979579601232984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cec9717e98fb%3A0x132de999bfe8c40b!2s3719%20E%20Gage%20Ave%2C%20Bell%2C%20CA%2090201%2C%20EE.%20UU.!5e0!3m2!1ses!2scr!4v1719537356736!5m2!1ses!2scr"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
