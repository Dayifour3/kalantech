import Activity from "@/Components/activity/Activity";
import Help from "@/Components/help/Help";
import Hero from "@/Components/hero/Hero";

const page = () => {
  return (
    <div className="text-white">
      <Hero />
      <Activity />
      <Help />
    </div>
  );
};

export default page;
