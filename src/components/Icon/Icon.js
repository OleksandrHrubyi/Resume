const Icon = ({ path}) => {
  return (
    <svg className="icon">
      <use xlinkHref={path}></use>
    </svg>
  );
};

export default Icon;
