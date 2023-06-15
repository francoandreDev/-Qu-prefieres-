import { useState } from 'react';
import { IOption } from '../../interfaces/IOption';
import useShuffleQuestions from '../../hooks/useShuffleQuestions';
import ShowSummary from '../ShowSummary/ShowSummary';
import Question from '../Question/Question';
import Options from '../Options/Options';
import './ContainerApp.css';

const ContainerApp = ({ currentJson }: { currentJson: any }) => {
    const shuffledQuestions = useShuffleQuestions(currentJson);
    const [showSummary, setShowSummary] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const handleOptionClick = (optionId: number) => {
        setTimeout(() => {
            const selectedOption = shuffledQuestions[
                currentQuestion
            ].options.find((option) => option.id === optionId);
            if (selectedOption) {
                setSelectedOptions([...selectedOptions, selectedOption]);
                setCurrentQuestion(currentQuestion + 1);
                if (currentQuestion + 1 === shuffledQuestions.length)
                    setShowSummary(true);
            }
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOptions([]);
        setShowSummary(false);
    };

    let element = (
        <ShowSummary
            selectedOptions={selectedOptions}
            onRestart={handleRestart}
        />
    );

    if (!showSummary) {
        element = (
            <>
                <Question
                    text={shuffledQuestions[currentQuestion].text}
                    number={currentQuestion + 1}
                    total={shuffledQuestions.length}
                />

                <Options
                    options={shuffledQuestions[currentQuestion].options}
                    onOptionClick={handleOptionClick}
                />
            </>
        );
    }

    return <div className="container">{element}</div>;
};

export default ContainerApp;
