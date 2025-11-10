const SearchIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
    />
  </svg>
);

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Buscar exercícios, músculos ou tags',
  className = '',
}) => (
  <div
    className={`flex items-center gap-3 rounded-full bg-white/80 px-4 py-3 shadow-soft backdrop-blur transition focus-within:bg-white ${className}`}
  >
    <SearchIcon className="h-5 w-5 text-coral" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      placeholder={placeholder}
      className="w-full border-none bg-transparent text-sm text-text-dark outline-none placeholder:text-text-muted"
    />
  </div>
);

export default SearchBar;

