type Props = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ className = "", children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-xl font-bold text-white bg-emerald-800 hover:bg-pink-400 hover:text-emerald-900 py-4 px-10 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
