const InfoWithChild = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col  md:w-[270px] h-auto card_bg p-4 rounded-3xl shadow-lg text-white gap-2">
      <span className="text-6xl text-btn font-bold">{number}</span>
      <h3 className="text-2xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default InfoWithChild;
