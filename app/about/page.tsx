import SuperCard from "@/Components/card/SuperCard";
import FaqCard from "@/Components/faqcard/FaqCard";

const AproposPage = () => {
  return (
    <div className="pt-20 text-white">
      <div className="flex flex-col items-center gap-5 justify-center">
        <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
        <h2 className="text-5xl font-semibold w-[600px] text-center">
          Chez Kalantech, l'apprentissage va au-delà des bases
        </h2>
        <p className="text-2xl font-medium w-full md:w-8/12 text-center">
          <span className="font-bold">Kalantech</span> est une entreprise leader
          dans la formation professionnelle axée sur le numérique. Notre mission
          est de préparer les talents de demain à relever les défis
          technologiques grâce à des formations de qualité adaptées aux
          exigences d’un marché en constante évolution. Avec un ancrage au cœur
          de l’innovation, nous combinons expertise, accessibilité, et impact
          social pour transformer l’apprentissage et l'employabilité.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-14 pt-20 items-center justify-center">
        <div className="px-5 md:p-0 w-full md:w-4/12 flex flex-col gap-8">
          <h4 className="text-btn text-sm font-bold">K-LEARN</h4>
          <h2 className="text-5xl font-semibold lg:text-nowrap">
            Chez <span className="text-btn">KALANTECH</span>
          </h2>
          <p className="text-xl font-medium">
            Notre mission est de rendre l'apprentissage accessible, interactif
            et efficace. Nous croyons que l'éducation de qualité est la clé pour
            ouvrir les portes du succès professionnel. Nos forfaits sont les
            plus adaptés à vos besoins : à l'heure, au jour, au module ou en
            famille, il y en a pour toutes les situations
          </p>
        </div>
        <div className="w-full md:w-8/12 flex flex-wrap flex-col md:flex-row items-center gap-10 justify-center">
          <SuperCard
            img="/Group-18.png"
            text="Intelligence Artificielle et sciences des données"
          />
          <SuperCard img="/icon2.png" text="Développement de logiciels" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:gap-14 pt-20 items-start justify-center">
        <div className="p-2 md:p-8 w-full relative border-btn border-solid border-2 rounded-3xl md:w-1/2">
          <FaqCard
            tile="Plateforme D'e-Learning - Sensei"
            desc="Notre plateforme d’apprentissage en ligne permet aux apprenants d’accéder à des cours variés, de développer leurs compétences et d’obtenir des certifications reconnues. Avec Sensei, apprendre devient flexible, accessible et axé sur l’excellence."
            status={true}
          />
          <div className="mx-2 flex text-center h-[2px] bg-btn transition-all duration-700 ease-in-out"></div>
          <FaqCard
            tile="Plateforme de travail à distance - Remote Working"
            desc="Les certifiés de Sensei ont l’opportunité de monétiser leurs compétences grâce à notre plateforme de microtasking. Ils peuvent y travailler sur des projets spécifiques, collaborer avec des équipes et être rémunérés pour leurs contributions."
            status={false}
          />
          <div className="mx-2 flex text-center h-[2px] bg-btn transition-all duration-700 ease-in-out"></div>
          <FaqCard
            tile="Événements et engagements communautaires"
            desc="Nous organisons régulièrement des événements tels que des hackathons, des conférences (talks) et bien d’autres. Toutes les informations et actualités concernant nos activités sont publiées sur le site officiel de Kalantech, pour rester connectés avec notre communauté."
            status={false}
          />
          <div className="mx-2 flex text-center h-[2px] bg-btn transition-all duration-700 ease-in-out"></div>
          <FaqCard
            tile="Combien Coute nos formations?"
            desc="Pour Bénéficier de nos formations sur sensei il faut juste acheter un Mana(TOKEN) qui vous donnera accès a la plateforme a seulement 10 000F CFA"
            status={false}
          />
        </div>
        <div className="px-5 md:p-0 w-full md:w-1/2 flex flex-col gap-4">
          <h4 className="text-btn text-sm font-bold">K-LEARN</h4>
          <h2 className="text-5xl font-semibold">
            Quelques points qui vont vous permettent d'apprendre sur{" "}
            <span className="text-btn">Kalantech</span>.
          </h2>
          <p className="text-xl font-medium">
            Obtenez ici des réponses à nos questions les plus courantes, si vous
            ne trouvez pas de réponse à votre question. Veuillez nous contacter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AproposPage;
