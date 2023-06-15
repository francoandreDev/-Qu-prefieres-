import { useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import HighlightWrapper from '../highlight-wrapper/HighlightWrapper';
import ContainerApp from '../ContainerApp/ContainerApp';

import categoriesJson from '../../data/categories.json';

import acción from '../../data/categories/acción'
import animales from '../../data/categories/animales.json';
import aventura from '../../data/categories/aventura.json';
import casas from '../../data/categories/casas.json';
import cienciaFicción from '../../data/categories/ciencia-ficción.json';
import comedia from '../../data/categories/comedia.json'
import comida from '../../data/categories/comida.json';
import conocimiento from '../../data/categories/conocimientos.json';
import deportes from '../../data/categories/deportes.json';
import documental from '../../data/categories/documental'
import drama from '../../data/categories/drama.json'
import fantasía from '../../data/categories/fantasía.json'
import histórico from '../../data/categories/histórico.json'
import misterio from '../../data/categories/misterio.json'
import musical from '../../data/categories/musical'
import preguntas from '../../data/categories/questions';
import romance from '../../data/categories/romance.json';
import superPoderes from '../../data/categories/super-poderes.json';
import suspenso from '../../data/categories/suspenso.json'
import terror from '../../data/categories/terror'
import thriller from '../../data/categories/thriller.json'
import viajes from '../../data/categories/viajes.json'

import './variables.css';
import './App.css';

interface Option {
    id: number;
    text: string;
    image: string;
}

interface Question {
    id: number;
    text: string;
    options: Option[];
}

const jsons: Record<string, Question[]> = {
    'ciencia-ficción': cienciaFicción,
    'super-poderes': superPoderes,
    acción,
    animales,
    aventura,
    casas,
    comedia,
    comida,
    conocimiento,
    deportes,
    documental,
    drama,
    fantasía,
    histórico,
    misterio,
    musical,
    preguntas,
    romance,
    suspenso,
    terror,
    thriller,
    viajes,
};

const App: React.FC = () => {
    const [category, setCategory] = useState('preguntas');
    const [currentJson, setCurrentJson] = useState<Question[]>(preguntas);

    useEffect(() => {
        setCurrentJson(jsons[category.toLowerCase()]);
    }, [category]);

    return (
        <HighlightWrapper backgroundImage="https://i.pinimg.com/736x/b6/f4/89/b6f489bfe0e45f4e839322d7d158cba1.jpg">
            <div className="app">
                <ContainerApp currentJson={currentJson} />
                <Slider category={category} setCategory={setCategory} />
            </div>
        </HighlightWrapper>
    );
};

export default App;
