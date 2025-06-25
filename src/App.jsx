import { useState } from 'react';
import Flashcard from './components/Flashcard';
import { flashcards as originalFlashcards } from './data';

function App() {
  const [cards, setCards] = useState([...originalFlashcards]);
  const [index, setIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', or null

  const currentCard = cards[index];

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetInput();
    }
  };

  const handleNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      resetInput();
    }
  };

  const shuffleCards = () => {
    const shuffled = [...originalFlashcards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setIndex(0);
    resetInput();
  };

  const handleSubmitGuess = () => {
    const correctAnswer = currentCard.answer.toLowerCase().trim();
    const userAnswer = userGuess.toLowerCase().trim();
    setFeedback(userAnswer === correctAnswer ? 'correct' : 'incorrect');
  };

  const resetInput = () => {
    setUserGuess('');
    setFeedback(null);
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <p>Number of cards: {cards.length}</p>

      <div className="card-container">
        <Flashcard card={currentCard} />
      </div>

      <div className="guess-section">
        <label>
          <strong>Guess the answer here:</strong>{' '}
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Place your answer here..."
          />
        </label>
        <button onClick={handleSubmitGuess}>Submit Guess</button>

        {feedback === 'correct' && <p className="feedback correct">✅ Correct!</p>}
        {feedback === 'incorrect' && <p className="feedback incorrect">❌ Try again!</p>}
      </div>

      <div className="buttons">
        <button onClick={handlePrev} disabled={index === 0}>←</button>
        <button onClick={handleNext} disabled={index === cards.length - 1}>→</button>
        <button onClick={shuffleCards}>Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;
