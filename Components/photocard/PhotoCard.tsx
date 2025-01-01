import Image from "next/image";

const PhotoCard = ({
  img,
  date,
  subject,
  desc,
}: {
  img: string;
  date: string;
  subject: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col items-center w-[390px] h-[550px] card_bg rounded-3xl shadow-lg text-white gap-2">
      <div className="relative w-full h-[300px]">
        <Image src={img} alt="card" fill className="rounded-3xl" />
      </div>
      <div className="w-full p-4 flex flex-col gap-6">
        <div className="flex justify-between">
          <span className="">{date}</span>
          <span className="">{subject}</span>
        </div>
        <p className="text-xl font-medium w-[250px] h-[100px]">{desc}</p>
        <button className="text-black bg-btn p-3 w-[150px] rounded-full">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
