import React, { useState } from 'react';
import ImageSkeleton from '../image-squeleton/ImageSqueleton';
import './ImageExpanded.css';

const ImageTransition: React.FC<{
    className: string;
    src: string;
    alt: string;
}> = ({ className, src, alt }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageClick = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, 2000); // Ajusta el tiempo en milisegundos según tus necesidades
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`image-transition ${isExpanded ? 'expanded' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                onClick={handleImageClick}
                className={`image-wrapper ${
                    isHovered && !isExpanded ? 'hovered' : 'not-hovered'
                }`}
            >
                <ImageSkeleton className={className} src={src} alt={alt} />
            </div>
        </div>
    );
};

export default ImageTransition;
