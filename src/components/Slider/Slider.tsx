import { useState } from 'react';
import categoriesJson from '../../data/categories.json';
import './Slider.css';

const Slider = ({
    category,
    setCategory,
}: {
    category: string;
    setCategory: (category: string) => void;
}) => {
    const [toggleSliderActive, setToggleSliderActive] =
        useState<boolean>(true);

    const toggleActive = () => {
        setToggleSliderActive((current) => !current);
    };

    const updateUseGetJson = (category: string) => {
        setCategory(category);
    };

    return (
        <button className="icon-slider" onClick={() => toggleActive()}>
            {toggleSliderActive ? (
                <>
                    <div className="figure"></div>
                    <div className="figure"></div>
                </>
            ) : (
                <ul
                    className={`menú ${
                        toggleSliderActive ? 'inactive' : 'active'
                    }`}
                >
                    {categoriesJson.map(({ name }) => {
                        return (
                            <li
                                className={`${
                                    name === category ? 'current' : 'rest'
                                }`}
                                key={name}
                                onClick={() => updateUseGetJson(name)}
                            >
                                {name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </button>
    );
};

export default Slider;
