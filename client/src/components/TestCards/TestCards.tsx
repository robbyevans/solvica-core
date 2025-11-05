import "./TestCardsStyles.css";

type Card = {
  title: string;
  description: string;
  bgColor: string;
  age: number;
};

interface Props {
  cards: Card[];
  image: string;
  year: number;
}

const TestCards = ({ cards, image, year }: Props) => {
  return (
    <div className="landing-page">
      {cards.map((card, index) => {
        return (
          <div
            className="card"
            key={index}
            style={{ backgroundColor: card.bgColor }}
          >
            <h1 className="title">{`${card.title} ${card.age}`}</h1>

            <p className="description">{card.description}</p>
            <img src={image} alt="Card Image" className="card-image" />
            <p className="year">Year: {year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestCards;
