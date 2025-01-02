import Image from "next/image";

const SuperCard = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[280px] h-[310px] bg-slate-600 hover:bg-pink-900 hover:bg-opacity-10 bg-opacity-10 shadow-lg p-10 rounded-3xl text-white gap-2">
      <div className="relative w-[100px] h-[100px]">
        <Image src={img} alt="card" fill />
      </div>
      <p className="text-xl font-semibold">{text}</p>
    </div>
  );
};

export default SuperCard;
