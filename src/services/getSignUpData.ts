const getSignUpData = async () => {
  const response = await fetch(
    "https://frontend-take-home.fetchrewards.com/form"
  );
  try {
    if (!response.ok) throw new Error("Network response was not OK");
    const signUpData = await response.json();
    return signUpData;
  } catch (error) {
    console.log("There was an error: ", error);
  }
};

export default getSignUpData;
