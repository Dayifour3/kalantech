import InfoWithChild from "@/Components/Infochild/InfoWithChild";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="pt-10 text-white">
      <div className="flex flex-col md:flex-row md:gap-14 items-center justify-center">
        <div className="px-5 md:p-0 w-full md:w-7/12 flex flex-col gap-8">
          <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
          <h2 className="text-5xl font-semibold">Nos domaines de formations</h2>
          <p className="text-xl font-medium">
            Kalan Learn se nourrit de l'apprentissage par les pairs. Que vous
            soyez un développeur débutant ou expérimenté, la communauté offre de
            nombreuses opportunités de collaboration, aidant les individus à
            apprendre les uns des autres et à grandir ensemble.
          </p>
          <div className="flex gap-14 items-center">
            <h4 className="flex gap-2 text-lg font-semibold hover:scale-105">
              <span className="flex justify-center w-6 h-6 items-center bg-pink-950 rounded-full p-2">
                →
              </span>
              Intelligence artificielle
            </h4>
            <h4 className="flex gap-2 text-lg font-semibold hover:scale-105">
              <span className="flex justify-center w-6 h-6 items-center bg-pink-950 rounded-full p-2">
                →
              </span>
              Réalité augmentée
            </h4>
          </div>
        </div>
        <div className="px-5 md:p-0 w-full relative md:w-5/12 h-[500px]">
          <Image src="/servicephoto.png" alt="" fill />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center pt-20">
        <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
        <h2 className="text-5xl font-semibold w-[600px] text-center">
          Chez Kalantech, l'apprentissage va au-delà des bases
        </h2>
        <p className="text-2xl font-medium w-full md:w-[500px] text-center">
          Nous offrons un soutien continu aux apprenants pour former la
          prochaine génération de technologues.
        </p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-8 md:gap-10 pt-20 items-stretch justify-center">
        <InfoWithChild
          number="01"
          title="Kalan Learn : La Révolution de l’Apprentissage"
        >
          <div className="text-md font-light">
            <p>
              Nous offrons une plateforme de formation moderne et accessible qui
              s'adapte à vos besoins spécifiques :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-semibold">Formats flexibles :</span> à
                l’heure, au jour, par module.
              </li>
              <li>
                <span className="font-semibold">Impact social :</span> en
                collaboration avec des bailleurs et institutions, nous touchons
                les communautés éloignées en leur offrant des opportunités
                d'apprendre et de prospérer.
              </li>
            </ul>
          </div>
        </InfoWithChild>
        <InfoWithChild
          number="02"
          title="Kalan Work : Monétisez Vos Compétences"
        >
          <div className="text-md font-light">
            <p>
              Avec Kalan Work, transformez vos apprentissages en opportunités de
              revenu.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-semibold">
                  Microtasking et projets réels :
                </span>{" "}
                Travaillez sur des missions adaptées à vos compétences.
              </li>
              <li>
                <span className="font-semibold">Aprentissage pratique :</span>{" "}
                Développez votre expertise tout en gagnant de l’expérience
                professionnelle.
              </li>
              <li>
                <span className="font-semibold">
                  Flexibilité et autonomie :
                </span>{" "}
                Gagnez en travaillant à votre rythme sur des projets stimulants.
              </li>
            </ul>
          </div>
        </InfoWithChild>
        <InfoWithChild
          number="03"
          title="Kalan Up : Un Partenaire pour Vos Projets"
        >
          <div className="text-md font-light">
            <p>
              Nous accompagnons les entreprises à chaque étape clé de leur
              développement numérique :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-semibold">Conseil stratégique :</span>
                pour structurer vos idées.
              </li>
              <li>
                <span className="font-semibold">Modèles variés :</span> régie,
                agence, freelance.
              </li>
              <li>
                <span className="font-semibold">Soutien à la croissance :</span>{" "}
                Bénéficiez de notre expertise pour faire grandir votre projet.
              </li>
            </ul>
          </div>
        </InfoWithChild>
        <InfoWithChild number="04" title="Kalan Space : Hubs d'Innovation">
          <div className="text-md font-light">
            <p>
              Nos hubs physiques et connectés sont des espaces inspirants pour :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-semibold">Apprendre et pratiquer</span>
                dans des environnements motivants et sécurisés.
              </li>
              <li>
                <span className="font-semibold">Générer du revenu</span> et
                soutenir la communauté.
              </li>
              <li>
                <span className="font-semibold">
                  Centres de certification :
                </span>{" "}
                Obtenez des diplômes reconnus au sein de nos infrastructures
              </li>
            </ul>
          </div>
        </InfoWithChild>
      </div>
      <div className="flex gap-5 justify-between flex-col md:flex-row rounded-3xl p-10 bg-slate-500 bg-opacity-10 mt-40 shadow-2xl">
        <h2 className="text-5xl md:text-8xl font-bold">
          Vous avez des questions ?
        </h2>
        <button className="w-[200px] h-[60px] text-black bg-btn text-xl text-center p-2 rounded-full text-nowrap">
          POSEZ-LES
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
