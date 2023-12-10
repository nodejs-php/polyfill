import Rating from "./Rating";
import "./App.css";
import Spinner from "./Spinner";
import Star from "./Star";
import { useRef, useState } from "react";

function App() {
  const [currentRating, setRating] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const previousRating = useRef();
  const handleRating = (newRating) => {
    //preserve the previous rating before modifying it with new rating
    previousRating.current = currentRating;
    setIsLoading(true);
    setRating(newRating);

    setTimeout(() => {
      const random = Math.round(Math.random() * 10);
      if (random < 5) {
        setRating(previousRating.current);
      }
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <Rating
        totalItems={5}
        currentRating={currentRating}
        onItemClick={handleRating}
        ratingItem={(isFilled) => <Star isFilled={isFilled} />}
        isLoading={isLoading}
        loaderItem={() => <Spinner />}
      />
    </>
  );
}

export default App;
