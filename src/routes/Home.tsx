import { useNavigate } from "react-router";
import Button from "../components/Button";
import eggnogLogo from "../assets/eggnog.png";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onSignup = () => {
    navigate("/sign-up");
  };
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-emerald-900 to-teal-800 py-14 md:py-24 px-6 relative">
        <img
          src={eggnogLogo}
          alt="Eggnog logo"
          className="hidden md:block md:h-52 md:w-52 2xl:h-96 2xl:w-96 absolute md:right-14 md:bottom-1/2 2xl:bottom-1/4 2xl:right-24"
        />
        <h1 className="text-center text-3xl md:text-9xl font-bold home-header mt-2 mb-8 md:mb-14 uppercase whitespace-pre-line md:text-left">
          Egg Nog <br className="hidden md:block" />
          Extravaganza
        </h1>

        <h5 className="text-center text-green-50 md:text-left">
          One day. Many distinguished individuals.{" "}
          <span className="text-emerald-400 font-bold">Unlimited</span> Egg nog
          with maximum Christmas cheer.
        </h5>
      </div>

      <div className="bg-neutral-800 py-10 px-8 md:py-28">
        <h2 className="text-2xl mb-4 md:text-3xl md:mb-8 text-white text-center font-bold">
          Gather 'Round
        </h2>
        <p className="text-white mb-10 text-center">
          Come one, come all. Just make sure you're an Egg Nog Enthusiast. This
          is a once in a lifetime event.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-emerald-600 p-8">
            <p className="text-emerald-600 uppercase font-light mb-2 md:text-lg">
              When
            </p>
            <p className="text-4xl text-emerald-600 md:text-5xl font-bold">
              Dec 27
            </p>
          </div>
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-pink-400 p-8">
            <p className="text-pink-400 uppercase font-light mb-2 md:text-lg">
              Where
            </p>
            <p className="text-4xl text-pink-400 md:text-5xl font-bold">
              123 NORTH POLE
            </p>
          </div>
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-sky-500 p-8">
            <p className="text-sky-500 uppercase font-light mb-2 md:text-lg">
              Cost
            </p>
            <p className="text-4xl text-sky-500 md:text-5xl font-bold">FREE*</p>
          </div>
        </div>
        <p className="text-white text-right mt-8 text-sm">
          * Be sure to{" "}
          <Link to="/sign-up" className="text-pink-400 hover:underline">
            sign up
          </Link>
          , fellow Egg Nog Enthusiast!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-8 py-12 md:py-20 bg-emerald-50">
        <Button className="mb-4" onClick={onSignup}>
          Sign Up Now
        </Button>
        <h3 className="text-lg text-center">
          Sign up required to participate. You'll be notified of important info
          leading up to this event. Stay Noggy!
        </h3>
      </div>
    </div>
  );
};

export default Home;
