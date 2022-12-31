import { useState } from "react";

const useFlip = (initialState) => {
  const [isFaceUp, setIsFaceUp] = useState(initialState);

  const handleFlip = () => {
    setIsFaceUp((isFaceUp) => !isFaceUp);
  };

  return [isFaceUp, handleFlip];
};

export default useFlip;
