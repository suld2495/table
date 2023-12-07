// QuestionCard.js
import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  perspective: 1000px;
  cursor: pointer;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')}; 
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const FrontFace = styled(CardFace)`
  background-color: ${(props) => (props.flipped ? '#3498db' : '#2ecc71')};
`;

const BackFace = styled(CardFace)`
  background-color: #3498db;
  transform: rotateY(180deg);
`;

const QuestionCard = ({ question, color }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (flipped) {
        return;
      }
    
      // Flip the card
      setFlipped(true);
  };

  return (
    <Card onClick={handleCardClick}>
      <CardInner flipped={flipped}>
        <FrontFace flipped={flipped} style={{ backgroundColor: color }}>
          골라골라
        </FrontFace>
        <BackFace>{question}</BackFace>
      </CardInner>
    </Card>
  );
};

export default QuestionCard;
