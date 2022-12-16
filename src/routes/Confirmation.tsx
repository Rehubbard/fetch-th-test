import { useParams } from "react-router-dom";
import eggnogLogo from "../assets/eggnog.png";

const Confirmation = () => {
  const params = useParams();
  return (
    <div className="py-24 flex flex-col items-center bg-gradient-to-r from-emerald-900 to-teal-800 min-h-screen">
      <div className="flex items-center mb-8">
        <img src={eggnogLogo} alt="Eggnog logo" className="h-16 w-16 mr-8" />
        <h1 className="text-emerald-500 font-bold text-3xl">
          Thanks {params?.name}, we're{" "}
          <span className="text-pink-400">eggstatic</span> to have you!
        </h1>
        <img src={eggnogLogo} alt="Eggnog logo" className="h-16 w-16 ml-8" />
      </div>

      <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-emerald-700 p-8 w-1/2">
        <h4 className="text-neutral-900 text-lg font-bold text-center mb-4">
          More Details for the Big Day
        </h4>

        <p>
          Eggnog (/ˈɛɡˌnɒɡ/), historically also known as a milk punch or an egg
          milk punch when alcoholic beverages are added,[1][2][3] is a rich,
          chilled, sweetened, dairy-based beverage. It is traditionally made
          with milk, cream, sugar, egg yolks, and whipped egg whites (which
          gives it a frothy texture, and its name). Distilled spirits such as
          brandy, rum, whisky or bourbon are often a key ingredient. Throughout
          Canada, the United States and some European countries, eggnog is
          traditionally consumed over the Christmas season, from late October
          until the end of the holiday season. A variety called ponche crema has
          been made and consumed in Venezuela and Trinidad since the 1900s, also
          as part of the Christmas season. During that time, commercially
          prepared eggnog is sold in grocery stores in these countries. Eggnog
          is also homemade using milk, eggs, sugar, and flavorings, and served
          with cinnamon or nutmeg. While eggnog is often served chilled, in some
          cases it is warmed, particularly on cold days (similar to the way
          mulled wine is served warm). Eggnog or eggnog flavoring may also be
          used in other drinks, such as coffee (e.g., an "eggnog latte" espresso
          drink) and tea, or to dessert foods such as egg-custard puddings.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
