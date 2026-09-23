const MainButton = ({
  children,
  className,
  onClick,
  onclick,
  type = "button",
}) => {
  const handleClick = onClick ?? onclick;

  return (
    <button
      type={type}
      className={`rounded-md font-bold py-3 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
