import React, { useState } from 'react';
import Question from '../Question/Question';
import Option from '../Option/Option';
import Summary from '../Summary/Summary';
import Restart from '../Restart/Restart';
import HighlightWrapper from '../highlight-wrapper/HighlightWrapper';

import { IOption } from '../../interfaces/IOption';

import questions from '../../data/questions.json';

import './App.css';
import './variables.css';

const App: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);
    const [showSummary, setShowSummary] = useState<boolean>(false);

    const handleOptionClick = (optionId: number) => {
        setTimeout(() => {
            const selectedOption = questions[currentQuestion].options.find(
                (option) => option.id === optionId
            );
            if (selectedOption) {
                setSelectedOptions([...selectedOptions, selectedOption]);
                setCurrentQuestion(currentQuestion + 1);
                if (currentQuestion + 1 === questions.length) {
                    setShowSummary(true);
                }
            }
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOptions([]);
        setShowSummary(false);
    };

    return (
        <HighlightWrapper backgroundImage="https://i.pinimg.com/736x/b6/f4/89/b6f489bfe0e45f4e839322d7d158cba1.jpg">
            <div className="app">
                <div className="container">
                    {showSummary ? (
                        <>
                            <Summary selectedOptions={selectedOptions} />
                            <Restart onRestart={handleRestart} />
                        </>
                    ) : (
                        <>
                            <Question
                                text={questions[currentQuestion].text}
                                number={currentQuestion + 1}
                                total={questions.length + 1}
                            />
                            <div className="options">
                                {questions[currentQuestion].options.map(
                                    ({ id, text, image }) => (
                                        <Option
                                            key={id}
                                            text={text}
                                            image={image}
                                            onClick={() =>
                                                handleOptionClick(id)
                                            }
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </HighlightWrapper>
    );
};

export default App;
