import './Question.css';

export interface IQuestionProps {
    text: string;
    number: number;
    total: number;
}

const Question: React.FC<IQuestionProps> = ({ text, number, total }) => {
    const questionElement = <h2 className="question">{text}</h2>;
    const indexQuestionElement = (
        <h3 className="question number-question">
            {number} / {total}
        </h3>
    );
    return (
        <div className="question-container">
            {questionElement}
            {indexQuestionElement}
        </div>
    );
};

export default Question;
