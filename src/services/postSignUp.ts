type SignUpPostBody = {
  name: string;
  email: string;
  password: string;
  occupation: string;
  state: string;
};

const postSignUp = async (data: SignUpPostBody) => {
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
