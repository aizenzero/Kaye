import React, { useState } from "react";
import Confetti from "react-dom-confetti";
import '../styles/navbar.css';

function Header() {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const [isFlowerActive, setFlowerActive] = useState(false);

  const handleClick = () => {
    setConfettiActive(true);
    setFlowerActive(true);

    setTimeout(() => {
      setConfettiActive(false);
      setFlowerActive(false);
    }, 3000); // Adjust duration as needed
  };

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 60,
    decay: 0.9,
  };

  return (
    <div className="container"> 
      <button onClick={handleClick}>Click me</button>
      <div className="confetti-container">
        <Confetti active={isConfettiActive} config={confettiConfig} />
      </div>
      {isFlowerActive && (
        <div className="flower-container">
          {/* Your flower component or image goes here */}
          <span role="img" aria-label="flower" className="flower-1">🌸</span>
          <span role="img" aria-label="flower" className="flower-2">🌸</span>
          <span role="img" aria-label="flower" className="flower-2">🌸</span>
          <span role="img" aria-label="flower" className="flower-3">🌸</span>
          <span role="img" aria-label="flower" className="flower-4">🌸</span>
          <span role="img" aria-label="flower" className="flower-5">🌸</span>
        </div>
      )}
      {isConfettiActive && (
        <div className="message-container">
          <h1>Hi kaye, <span style={{color:"red"}}> "Happy Valentines"</span> </h1>
        </div>
        
        
      )}
    </div>
  );
}

export default Header;
