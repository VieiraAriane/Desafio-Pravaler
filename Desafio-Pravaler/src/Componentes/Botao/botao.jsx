import "./botao.css";


export const Botao = ({
  children,
  onClick,
  classNameContainer = "button-container",
  className = "button",
  ...props
}) => {
  return (
    <div className={classNameContainer}>
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};



