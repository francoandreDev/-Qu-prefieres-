import React from 'react';

import './Restart.css';

interface RestartProps {
    onRestart: () => void;
}

const Restart: React.FC<RestartProps> = ({ onRestart }) => {
    return (
        <div className="restart">
            <button className="restart-button" onClick={onRestart}>
                Volver a empezar
            </button>
        </div>
    );
};

export default Restart;
