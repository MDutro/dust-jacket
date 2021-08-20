const Card = ({ title, body }) => {
  return (
    <div className="card-basics">
      <h1 className="card-title">{title}</h1>
      <div className="fade-rule"></div>
      {body}
    </div>
  );
};

export default Card;
