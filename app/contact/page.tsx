import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="pt-20 text-white">
      <div className="flex flex-col md:flex-row md:gap-14 items-start justify-center">
        <div className="px-5 md:p-0 w-full md:4/12 ld:w-7/12 flex flex-col gap-4">
          <h4 className="text-btn text-sm font-bold">© Contactez-nous</h4>
          <h2 className="text-5xl font-semibold">
            Besoin d'un accompagnement{" "}
            <span className="text-btn">technologique</span> Contactez nous
          </h2>
          <p className="text-xl font-medium">
            Vous avez une question ? Vous voulez en savoir plus sur nous ou même
            nous raconter une blague ?
          </p>
        </div>
        <div className="px-5 md:p-0 w-full lg:w-11/12 relative xl:w-8/12 h-[600px] lg:h-[500px]">
          <Image src="/woman2.png" alt="" fill />
        </div>
      </div>
      <div className="mx-5 md:mx-0 p-2 flex flex-col gap-4 md:p-8 w-10/12 border-btn border-solid border-2 rounded-3xl md:w-1/2 bg-slate-500 bg-opacity-20">
        <input
          type="text"
          placeholder="Enter your name"
          className="h-[60px] outline-none bg-transparent border-b-2 border-btn border-solid text-white text-lg"
        />
        <input
          type="email"
          placeholder="Enter a valid email address"
          className="h-[60px] outline-none bg-transparent border-b-2 border-btn border-solid text-white text-lg"
        />
        <textarea
          name=""
          id=""
          rows={10}
          placeholder="Type Your Message Here..."
          className="outline-none bg-transparent border-b-2 border-btn border-solid text-white text-lg"
        ></textarea>
        <button className="w-[120px] h-[60px] text-black bg-btn text-xl text-center p-2 rounded-full text-nowrap">
          SEND
        </button>
      </div>
      <div className="flex flex-col items-center gap-5 justify-between md:flex-row pt-20">
        <div className="flex justify-center items-center flex-col gap-5 hover:text-btn">
          <div className="flex justify-center items-center rounded-xl w-[80px] p-3 card_bg">
            <Image src="/pincolor.png" alt="" width={50} height={50} />
          </div>
          <h5 className="text-sm font-normal">Bureau principale</h5>
          <h3 className="text-xl text-center max-w-[250px]">
            Medina Coura sur la Rue 14 de non loin de OTA
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 hover:text-btn">
          <div className="flex justify-center items-center rounded-xl w-[80px] p-3 card_bg">
            <Image src="/pincolor.png" alt="" width={50} height={50} />
          </div>
          <h5 className="text-sm font-normal">Contact</h5>
          <h3 className="text-xl text-center max-w-[250px]">
            Fix: 44-54-41-12 Tel: 223 73-54-62-43 WhatsApp: 23 70-40-56-29
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 hover:text-btn">
          <div className="flex justify-center items-center rounded-xl w-[80px] p-3 card_bg">
            <Image src="/pincolor.png" alt="" width={50} height={50} />
          </div>
          <h5 className="text-sm font-normal">Email</h5>
          <h3 className="text-xl text-center max-w-[250px]">
            Veuillez nous contacter au service@kalantech.tech
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
