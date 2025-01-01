import Card from "../card/Card";

const Activity = () => {
  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row items-center gap-10 justify-center pt-20">
      <Card img="/smiley.png" text="Activité 1" />
      <Card img="/smiley.png" text="Activité 1" />
      <Card img="/smiley.png" text="Activité 1" />
      <Card img="/smiley.png" text="Activité 1" />
    </div>
  );
};

export default Activity;
