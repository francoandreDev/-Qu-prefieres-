import React from 'react';

import './Question.css';

export interface IQuestionProps {
    text: string;
    number: number;
    total: number;
}

const Question: React.FC<IQuestionProps> = ({ text, number, total }) => {
    return (
        <div className="question-container">
            <h2 className="question">{text}</h2>
            <h3 className="question number-question">
                {number} / {total}
            </h3>
        </div>
    );
};

export default Question;
