import Image from "next/image";
import InfoCard from "../infocard/InfoCard";

const Help = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row md:gap-14 pt-20 items-center justify-center">
        <div className="px-5 md:p-0 w-full relative md:w-7/12 h-[500px]">
          <Image src="/woman.png" alt="" fill />
        </div>
        <div className="px-5 md:p-0 w-full md:w-5/12 flex flex-col gap-8">
          <h4 className="text-btn text-sm font-bold">K-LEARN</h4>
          <h2 className="text-5xl font-semibold">
            Vous avez une compétence, Nous vous aidons a la monétiser
          </h2>
          <p className="text-xl font-medium">
            Adoptez notre solution pour un apprentissage personnalisé,
            interactif et efficace, conçu pour maximiser vos compétences et
            votre réussite professionnelle.
          </p>
          <button className="text-xl text-black bg-btn p-4 rounded-full w-[150px]">
            Lire Plus
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center pt-20">
        <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
        <h2 className="text-5xl font-semibold w-[600px] text-center">
          Nous vous offrons les compétences dont vous avez besoin
        </h2>
        <p className="text-xl font-medium w-[600px] text-center">
          Située au cœur de l'innovation, KalanTech se distingue par son offre
          de formations de haute qualité, adaptées aux besoins du marché en
          constante évolution.
        </p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-8 md:gap-10 pt-20 items-stretch justify-center">
        <InfoCard
          number="01"
          title="KALAN LEARN"
          desc="Chez KALANTECH, notre mission est de rendre l'apprentissage accessible, interactif et efficace. Nous croyons que l'éducation de qualité est la clé pour ouvrir les portes du succès professionnel."
        />
        <InfoCard
          number="02"
          title="KALAN WORK"
          desc="Nous croyons que l'apprentissage ne se limite pas à acquérir des connaissances théoriques, mais aussi à savoir comment les appliquer dans le monde réel"
        />
        <InfoCard
          number="03"
          title="KALAN UP"
          desc="Fort de plusieurs années en accompagnement de projets numériques, KALANTECH conseille, structure, développe et vous fait grandir à chaque étape clé  de votre entreprise"
        />
        <InfoCard
          number="04"
          title="KALAN SPACE"
          desc="vous accompagne dans des lieux physiques connectés et sécurisés pour pratiquer dans un environnement motivant."
        />
      </div>
      <div className="flex flex-col mt-40">
        <div className="flex flex-col md:flex-row gap-10 items-end justify-between">
          <div className="flex flex-col gap-3">
            <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
            <h2 className="text-5xl font-medium">Notre Approche</h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-2xl font-medium">
              Chez KalanTech, nous privilégions une approche pédagogique centrée
              sur l’apprenant. Nos formations sont conçues pour être pratiques
              et immersives, permettant aux participants de mettre immédiatement
              en application les connaissances acquises.
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-btn mt-4"></div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="font-btn text-4xl text-btn font-bold">Apprenants</h3>
            <div className="w-[100px] h-[100px] bg-btn rounded-full text-4xl flex text-black font-semibold justify-center items-center">
              +15K
            </div>
            <p className="text-xl font-medium w-[400px] text-center">
              Pour réussir, chaque solution logicielle doit être profondément
              intégrée à l’environnement technologique existant.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="font-btn text-4xl text-btn font-bold">Communauté</h3>
            <div className="w-[100px] h-[100px] bg-btn rounded-full text-4xl flex text-black font-semibold justify-center items-center">
              12K
            </div>
            <p className="text-xl font-medium w-[400px] text-center">
              Une communauté active et engagée
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center pt-20">
        <h4 className="text-btn text-sm font-bold">© FEEDBACK</h4>
        <h2 className="text-5xl font-semibold w-[600px] text-center">
          Découvrez ce que nos <span className="text-btn">personnels</span>{" "}
          disent à propos de leur travail avec nous
        </h2>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-5 pt-20 items-center">
        <div className="px-5 md:p-0 w-full md:w-7/12 flex flex-col gap-8">
          <Image src="/Testi-5000.svg" alt="" width={100} height={100} />
          <p className="text-2xl font-medium">
            "J'ai eu la chance de travailler avec une équipe de professionnels
            talentueux et passionnés. J'ai appris beaucoup de choses et j'ai pu
            développer mes compétences en matière de développement web."
          </p>
          <button className="text-xl text-black bg-btn p-4 rounded-full w-[150px]">
            Lire Plus
          </button>
        </div>
        <div className="w-full md:5/12 flex justify-center items-center flex-col gap-5 px-5 md:p-0 ">
          <div className="flex gap-3">
            <div className="w-[2px] h-[55px] bg-btn"></div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Mohamed TRaoré</h4>
              <h3 className="font-semibold">Manager</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative  h-[400px]">
            <Image src="/feeadbacker.png" alt="" fill />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <h4 className="text-btn text-sm font-bold">K-LEARN</h4>
          <h2 className="text-5xl font-semibold">
            Vous avez une compétence, Nous vous aidons a la monétiser
          </h2>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Help;
