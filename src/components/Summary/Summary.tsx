import React from 'react';
import ImageSkeleton from '../image-squeleton/ImageSqueleton';

import './Summary.css';

interface Option {
    id: number;
    text: string;
    image: string;
}

interface SummaryProps {
    selectedOptions: Option[];
}

const Summary: React.FC<SummaryProps> = ({ selectedOptions }) => {
    return (
        <div className="summary">
            <h2 className="summary-title">Resumen</h2>
            <div className="summary-grid">
                {selectedOptions.map((option) => (
                    <div
                        key={option.id}
                        className="summary-option summary-item"
                    >
                        <p className="summary-option-text">{option.text}</p>
                        <ImageSkeleton
                            className="summary-option-image"
                            src={option.image}
                            alt={option.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Summary;
