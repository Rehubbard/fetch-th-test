import { useLoaderData } from "react-router";

const SignUp = () => {
  const signUpData = useLoaderData();
  console.log(signUpData);
  return (
    <div className="py-24 flex flex-col items-center bg-gradient-to-r from-emerald-900 to-teal-800 min-h-screen">
      <h1 className="text-emerald-500 font-bold text-3xl mb-2">
        Sign Up for the Egg Nog Extravaganza
      </h1>
      <p className="text-white text-sm">
        A little information is required to add you to the guest list. We'll see
        you there. Stay Noggy!
      </p>

      <div className="bg-gradient-to-r from-neutral-300 to-neutral-50 rounded border-b-[20px] border-emerald-600 p-8">
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default SignUp;
