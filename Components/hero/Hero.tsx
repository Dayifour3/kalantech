import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row items-center gap-5 md:h-[calc(100vh-100px)]">
      <div className="w-8/12 flex flex-col justify-center gap-8 lg:gap-20">
        <h2 className="pt-5 md:pt-0 text-3xl sm:text-4xl xl:text-6xl font-bold">
          KalanTech, une Edtech qui réinvente l’apprentissage grâce à
          L’intelligence artificielle
        </h2>
        <div className="flex gap-4 items-center">
          <button className="text-black bg-btn text-xl p-3 rounded-full">
            Contactez nous
          </button>
          <button className="text-btn text-xl">Discussion</button>
        </div>
      </div>
      <div className="w-[400px] h-[400px] relative md:w-[500px] md:h-[500px]">
        <Image src="/smiley.png" alt="" fill />
      </div>
    </div>
  );
};

export default Hero;
