import React from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import { questionList } from '../questionList'; 

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;
const Question = () => {
    console.log("question")
    return (
        <CardContainer>
        {questionList.map((q) => (
           <QuestionCard key={q.id} question={q.question} color={q.color} />
        ))}
      </CardContainer>

    )
};

export default Question;