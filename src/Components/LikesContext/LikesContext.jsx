import React, { createContext, useState } from "react";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(new Array(0).fill(false));

  const handleLikeClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <LikesContext.Provider value={{ likes, handleLikeClick }}>
      {children}
    </LikesContext.Provider>
  );
};

export default LikesContext;
