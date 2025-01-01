import Card from "../card/Card";

const Activity = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 pt-20">
      <div className="w-full flex flex-wrap flex-col md:flex-row items-center gap-10 justify-center">
        <Card img="/Group-18.png" text="IA/ANALYSE DE DONNEES" />
        <Card img="/icon2.png" text="DEVELOPPEMENT WEB" />
        <Card img="/icon-DATA.png" text="UI/UX DESIGN" />
        <Card img="/Group-17.png" text="SECURITE" />
      </div>
      <div>
        <h1 className="text-center text-4xl md:text-8xl text-btn">
          Des formations numériques adaptées a vos besoins
        </h1>
      </div>
    </div>
  );
};

export default Activity;
