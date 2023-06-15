import { IOption } from '../../interfaces/IOption';
import Restart from '../Restart/Restart';
import Summary from '../Summary/Summary';

type ShowSummaryType = {
    selectedOptions: IOption[];
    onRestart: () => void;
};

const ShowSummary = ({ selectedOptions, onRestart }: ShowSummaryType) => {
    return (
        <>
            <Summary selectedOptions={selectedOptions} />
            <Restart onRestart={onRestart} />
        </>
    );
};

export default ShowSummary;
