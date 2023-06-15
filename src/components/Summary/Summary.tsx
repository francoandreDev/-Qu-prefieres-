import './Summary.css';
import SummaryGrid from './SummaryGrid';

export interface Option {
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
            <SummaryGrid selectedOptions={selectedOptions} />
        </div>
    );
};

export default Summary;
