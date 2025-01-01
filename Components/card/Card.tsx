import Image from "next/image";

const Card = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className="card_bg p-4 rounded-lg shadow-lg text-center text-white">
      <div className="relative w-[100px] h-auto">
        <Image src={img} alt="card" fill />
      </div>
      <p className="text-xl font-medium">{text}</p>
    </div>
  );
};

export default Card;
