const Card = ({ title, body }) => {
  return (
    <div className="card-basics">
      <h1 className="card-title">{title}</h1>
      <hr />
      {body}
    </div>
  );
};

export default Card;
