import Image from "next/image";

const Card = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[270px] h-[270px] card_bg p-10 rounded-3xl shadow-lg text-white gap-2">
      <div className="relative w-[100px] h-[100px]">
        <Image src={img} alt="card" fill />
      </div>
      <p className="text-xl font-semibold">{text}</p>
    </div>
  );
};

export default Card;
