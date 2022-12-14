type Props = {
  error?: string | null;
};

const ErrorMessage = (error: string) => {
  if (!error) return null;
  return <p className="text-red-800">{error}</p>;
};

export default ErrorMessage;
