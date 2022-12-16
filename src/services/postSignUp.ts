import { SignUpForm } from "../routes/SignUp";

const postSignUp = async (data: SignUpForm) => {
  const response = await fetch(
    "https://frontend-take-home.fetchrewards.com/form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

export default postSignUp;
