const MainButton = ({
  children,
  className,
  onClick,
  onclick,
  name,
  ariaLabel,
  type = "button",
}) => {
  const handleClick = onClick ?? onclick;

  return (
    <button
      type={type}
      name={name}
      className={`rounded-md font-bold py-3 cursor-pointer ${className}`}
      onClick={handleClick}
	  aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default MainButton;
