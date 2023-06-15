import React, { useEffect, useState } from 'react';
import './TypingText.css';

interface TypingTextProps {
    text: string;
    loop?: boolean;
    loopDelay?: number;
    className?: string;
    typingSpeed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
    text,
    loop = false,
    loopDelay = 2000,
    className = '',
    typingSpeed = 100,
}) => {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout>;

        const type = () => {
            const currentChar = text[currentIndex];

            setTypedText((prevTypedText) => {
                if (isDeleting) {
                    return prevTypedText.slice(0, -1);
                } else {
                    return prevTypedText + currentChar;
                }
            });

            if (isDeleting && typedText === '') {
                setIsDeleting(false);

                if (currentIndex === text.length - 1) {
                    setIsFinished(true);
                    clearTimeout(timerId);
                    return;
                }

                setCurrentIndex((prevIndex) => prevIndex + 1);

                if (loop) {
                    timerId = setTimeout(type, typingSpeed);
                } else {
                    clearTimeout(timerId);
                    return;
                }
            } else if (!isDeleting && currentIndex === text.length - 1) {
                setIsDeleting(true);

                if (loop) {
                    clearTimeout(timerId);
                    timerId = setTimeout(() => {
                        setIsDeleting(false);
                        setCurrentIndex((prevIndex) => prevIndex - 1);
                    }, loopDelay);
                } else {
                    setIsFinished(true);
                    clearTimeout(timerId);
                    return;
                }
            } else {
                const typingSpeedValue = isDeleting
                    ? typingSpeed / 10
                    : typingSpeed;

                if (isDeleting) {
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                } else {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }

                timerId = setTimeout(type, typingSpeedValue);
            }
        };

        timerId = setTimeout(type, typingSpeed);

        return () => {
            clearTimeout(timerId);
        };
    }, [
        typedText,
        text,
        currentIndex,
        isDeleting,
        loop,
        loopDelay,
        typingSpeed,
    ]);

    return (
        <p className={`typing-text ${className}`}>
            {loop || (!loop && !isFinished) ? typedText : text}
        </p>
    );
};

export default TypingText;
