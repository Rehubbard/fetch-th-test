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
      <div className="bg-gradient-to-r from-emerald-900 to-teal-800 py-24 px-6 relative">
        <img
          src={eggnogLogo}
          alt="Eggnog logo"
          className="h-96 w-96 absolute bottom-1/4 right-24"
        />
        <h1 className="text-9xl font-bold home-header mt-2 mb-14 uppercase whitespace-pre-line">
          Egg Nog {"\n"}Extravaganza
        </h1>

        <h5 className="text-green-50">
          One day. Many distinguished individuals.{" "}
          <span className="text-emerald-400 font-bold">Unlimited</span> Egg nog
          with maximum Christmas cheer.
        </h5>
      </div>

      <div className="bg-neutral-800 px-8 py-28">
        <h2 className="text-3xl mb-8 text-white text-center font-bold">
          Gather 'Round
        </h2>
        <p className="text-white mb-10 text-center">
          Come one, come all. Just make sure you're an Egg Nog Enthusiast. This
          is a once in a lifetime event.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-emerald-600 p-8">
            <p className="text-emerald-600 uppercase font-light mb-2 text-lg">
              When
            </p>
            <p className="text-emerald-600 text-5xl font-bold">Dec 27</p>
          </div>
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-pink-400 p-8">
            <p className="text-pink-400 uppercase font-light mb-2 text-lg">
              Where
            </p>
            <p className="text-pink-400 text-5xl font-bold">123 NORTH POLE</p>
          </div>
          <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-sky-500 p-8">
            <p className="text-sky-500 uppercase font-light mb-2 text-lg">
              Cost
            </p>
            <p className="text-sky-500 text-5xl font-bold">FREE*</p>
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

      <div className="flex flex-col items-center justify-center px-8 py-20 bg-emerald-50">
        <Button className="mb-4" onClick={onSignup}>
          Sign Up Now
        </Button>
        <h3 className="text-lg">
          Sign up required to be added to the Egg Nog Enthusiast list. You'll
          also be added to our newsletter to be notified of important info
          leading up to this event. Stay Noggy!
        </h3>
      </div>
    </div>
  );
};

export default Home;
