import TypingText from '../typing-text/TypingText';
import ImageTransition from '../image-expanded/ImageExpanded';

import './Option.css';

export interface IOption {
    text: string;
    image: string;
    onClick: () => void;
}

const Option: React.FC<IOption> = ({ text, image, onClick }) => {
    return (
        <div className="option-container" onClick={onClick}>
            <ImageTransition className={'option-image'} src={image} alt={text}/>
            <TypingText text={text} className="option-text" />
        </div>
    );
};

export default Option;
