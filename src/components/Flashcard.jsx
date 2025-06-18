import { useState } from "react";
import './Flashcard.css';

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const getBackground = () => {
    switch (card.category) {
      case 'Easy': return '#fef9c3';    // Light yellow
      case 'Medium': return '#bae6fd';  // Light blue
      case 'Hard': return '#fecaca';    // Light red
      default: return '#ffffff';
    }
  };

  return (
    <div
      className="flashcard"
      style={{ backgroundColor: getBackground() }}
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped ? (
        <div className="front">
          <h3>{card.question}</h3>
          {card.image && (
            <img
              src={card.image}
              alt="plant"
              className="card-img"
              onError={(e) => e.target.style.display = 'none'}
            />
          )}
        </div>
      ) : (
        <h2 className="back">{card.answer}</h2>
      )}
    </div>
  );
}
