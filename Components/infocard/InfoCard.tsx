const InfoCard = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-full flex flex-col  md:w-[270px] h-auto card_bg p-4 rounded-3xl shadow-lg text-white gap-2">
      <span className="text-6xl text-btn font-bold">{number}</span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-md font-light">{desc}</p>
    </div>
  );
};

export default InfoCard;
