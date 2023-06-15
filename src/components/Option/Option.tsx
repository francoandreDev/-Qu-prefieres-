import TypingText from '../typing-text/TypingText';
import ImageTransition from '../image-expanded/ImageExpanded';
import './Option.css';

export interface IOption {
    text: string;
    image: string;
    onClick: () => void;
}

const Option: React.FC<IOption> = ({ text, image, onClick }) => {
    const imageElement = (
        <ImageTransition className={'option-image'} src={image} alt={text} />
    );

    const typingText = <TypingText text={text} className="option-text" />;

    return (
        <div className="option-container" onClick={onClick}>
            {imageElement}
            {typingText}
        </div>
    );
};

export default Option;
