import { useState } from 'react';
import Flashcard from './components/Flashcard';
import { flashcards } from './data';

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <p>Number of cards: {flashcards.length}</p>

      <div className="card-container">
        <Flashcard card={flashcards[index]} />
      </div>

      <div className="buttons">
        <button onClick={handlePrev}>⬅️</button>
        <button onClick={handleNext}>➡️</button>
      </div>
    </div>
  );
}

export default App;
