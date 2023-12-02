import "./Card.css";

function Card({img_url, caption}) {
  return (
    <section className="Card">
      <img src={img_url} />
      <p>{caption}</p>
    </section>
  );
}

export default Card;
