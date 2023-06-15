import React, { useState, useEffect } from 'react';
import './ImageSqueleton.css';

const ImageSkeleton: React.FC<{
    className: string;
    src: string;
    alt: string;
}> = ({ className, src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

    let element = <img className={className} src={src} alt={alt} />;

    if (isLoading) {
        element = (
            <div className="image-skeleton">
                <div className={`skeleton-animation ${className}`}></div>
            </div>
        );
    }

    return element;
};

export default ImageSkeleton;
