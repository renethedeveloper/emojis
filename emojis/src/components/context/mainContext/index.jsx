
import Emojis from '../../emojis';
import ComplimentButton from '../../complimentButton';
import React, { createContext, useContext, useState } from 'react';

const MainProvider = () => {
  const [currentMood, setCurrentMood] = useState("😔");
  const [compliments, setCompliments] = useState(0);




  
  return (
    <div>
      <Emojis currentMood={currentMood} setCurrentMood={setCurrentMood} />
      <ComplimentButton compliments={compliments} setCompliments={setCompliments} setCurrentMood={setCurrentMood} />
    </div>
  );
};

export default MainProvider;
