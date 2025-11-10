import { useNavigate } from 'react-router-dom';

const ArrowLeftIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

const BackButton = ({ to, children = 'Voltar', className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-text-dark shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${className}`}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span>{children}</span>
    </button>
  );
};

export default BackButton;

