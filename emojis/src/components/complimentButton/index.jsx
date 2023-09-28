import React from 'react';
import { useContext } from 'react';

const ComplimentButton = ({ compliments, setCompliments, currentMood,setCurrentMood}) => {
  
  let newComps = compliments;
  

  if (newComps < 5) {
    setCurrentMood("😔")
  } else if (newComps > 5 && newComps <10) {
    setCurrentMood("😑")
  } else if(newComps >10) {
    setCurrentMood("😺")
  } else if(compliments <=0){
    setCompliments(0)
  }

  const handleMoodMore = () => {
    newComps = compliments + 1
    setCompliments(newComps)
  };

  const handleMoodLess = () => {
    if(compliments >0){
    newComps = compliments - 1
    setCompliments(newComps)
    }
  };
  return (
    <div>
      <button onClick={handleMoodMore}>Compliment me!</button>
      <button onClick={handleMoodLess}>Take away a compliment "😔"</button>
      <h2>{compliments}</h2>
    </div>
  );
};

export default ComplimentButton;
