import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 h-[calc(100vh-100px)]">
      <div className="w-8/12 flex flex-col justify-center gap-8 lg:gap-20">
        <h2 className="text-5xl xl:text-6xl font-bold">
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
      <div className="relative w-[500px] h-[500px]">
        <Image src="/smiley.png" alt="" fill />
      </div>
    </div>
  );
};

export default Hero;
