import Links from "../links/Links";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="text-6xl">Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Header;
