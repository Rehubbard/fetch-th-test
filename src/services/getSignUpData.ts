export type SignUpDataResponse = {
  occupations: string[];
  states: string[];
};

const getSignUpData = async (): Promise<SignUpDataResponse> => {
  const response = await fetch(
    "https://frontend-take-home.fetchrewards.com/form"
  );
  if (!response.ok) throw new Error("Network response was not OK");
  const signUpData = await response.json();
  return signUpData;
};

export default getSignUpData;
