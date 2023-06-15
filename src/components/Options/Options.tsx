import React from 'react';
import Option from '../Option/Option';
import './Options.css';

interface OptionProps {
    id: number;
    text: string;
    image: string;
}

interface OptionsProps {
    options: OptionProps[];
    onOptionClick: (id: number) => void;
}

const Options: React.FC<OptionsProps> = ({ options, onOptionClick }) => (
    <div className="options">
        {options.map(({ id, text, image }) => (
            <Option
                key={id}
                text={text}
                image={image}
                onClick={() => onOptionClick(id)}
            />
        ))}
    </div>
);

export default Options;
