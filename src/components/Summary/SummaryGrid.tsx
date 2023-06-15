import ImageSkeleton from '../image-squeleton/ImageSqueleton';
import { Option } from './Summary';

interface SummaryGridProps {
    selectedOptions: Option[];
}

const SummaryGrid = ({ selectedOptions }: SummaryGridProps) => {
    return (
        <div className="summary-grid">
            {selectedOptions.map((option) => {
                const textElement = (
                    <p className="summary-option-text">{option.text}</p>
                );

                const imageElement = (
                    <ImageSkeleton
                        className="summary-option-image"
                        src={option.image}
                        alt={option.text}
                    />
                );
                return (
                    <div
                        key={option.id}
                        className="summary-option summary-item"
                    >
                        {textElement}
                        {imageElement}
                    </div>
                );
            })}
        </div>
    );
};

export default SummaryGrid;
