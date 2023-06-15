import './Restart.css';

interface RestartProps {
    onRestart: () => void;
}

const Restart: React.FC<RestartProps> = ({ onRestart }) => {
    const restartButton = (
        <button className="restart-button" onClick={onRestart}>
            Volver a empezar
        </button>
    );
    return <div className="restart">{restartButton}</div>;
};

export default Restart;
