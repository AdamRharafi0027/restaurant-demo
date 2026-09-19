const MainButton = ({children, className, onclick}) => {
  return (
    <button className={`rounded-md font-bold py-3 cursor-pointer ${className}`}
        onClick={onclick}
    >
        {children}
    </button>
  )
}

export default MainButton