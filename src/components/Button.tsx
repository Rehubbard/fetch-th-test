type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-emerald-800 hover:bg-pink-400"
    >
      {children}
    </button>
  );
};

export default Button;
