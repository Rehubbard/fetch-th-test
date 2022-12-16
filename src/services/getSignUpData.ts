export type SignUpDataResponse = {
  occupations: { label: string; value: string }[];
  states: { label: string; value: string }[];
};

const getSignUpData = async (): Promise<SignUpDataResponse> => {
  const response = await fetch(
    "https://frontend-take-home.fetchrewards.com/form"
  );
  if (!response.ok) throw new Error("Network response was not OK");
  const jsonData = await response.json();
  const occupations = jsonData?.occupations?.map((occ: string) => ({
    label: occ,
    value: occ,
  }));
  const states = jsonData?.states?.map(
    (state: { abbreviation: string; name: string }) => ({
      label: state.abbreviation,
      value: state.name,
    })
  );

  return {
    occupations,
    states,
  };
};

export default getSignUpData;
