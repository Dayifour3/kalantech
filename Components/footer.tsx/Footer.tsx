import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 pb-10 text-white">
      <div className="flex justify-between items-end flex-col md:w-full md:flex-row">
        <h2 className="text-5xl font-bold">
          Contactez-<span className="text-btn">Nous</span>
        </h2>
        <div className="flex gap-3 items-center">
          <Image src="/logoslash.png" alt="logo" width={50} height={50} />
          <h3 className="text-4xl font-bold text-btn w-[600px]">
            Nous vous accompagnons à chaque étape de votre parcours
            d'apprentissage.
          </h3>
        </div>
      </div>
      <div className="w-full h-[2px] bg-btn mt-4"></div>

      <div className="mt-10 flex gap-10 justify-between mb-10">
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold">Bamako</h4>
          <div className="flex flex-col gap-4">
            <p className="font-md font-normal flex gap-2">
              <Image src="/pin.png" alt="location" width={20} height={20} />
              Medina coura Rue 14 pres de IOTA
            </p>
            <p className="font-md font-normal flex gap-2">
              <Image src="/call.png" alt="call" width={20} height={20} />
              223 73-54-62-43
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold">Kati</h4>
          <div className="flex flex-col gap-4">
            <p className="font-md font-normal flex gap-2">
              <Image src="/pin.png" alt="location" width={20} height={20} />
              Kati koko
            </p>
            <p className="font-md font-normal flex gap-2">
              <Image src="/call.png" alt="call" width={20} height={20} />
              223 78-30-90-46
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold">Ségou</h4>
          <div className="flex flex-col gap-4">
            <p className="font-md font-normal flex gap-2">
              <Image src="/pin.png" alt="location" width={20} height={20} />
              Hamdallye
            </p>
            <p className="font-md font-normal flex gap-2">
              <Image src="/call.png" alt="call" width={20} height={20} />
              223 70-40-56-29
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-btn mt-4"></div>
      <p className="mt-4">© 2025 Kalan Tech. All rights reserved.</p>
    </div>
  );
};

export default Footer;
