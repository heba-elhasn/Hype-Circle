import React, { useState } from 'react';


const HypeButton = () => {
  const [hypes, setHypes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
        setHypes(hypes+1);
    } else {
        setHypes(hypes);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `hype-button ${isClicked && 'hyped'}` } onClick={ handleClick }>
      <span className="hypes-counter">{ `hype | ${hypes}` }</span>
    </button>
  );
};

export default HypeButton;