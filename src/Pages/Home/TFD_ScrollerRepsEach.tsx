import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import './TFD_ScrollerRepsEach.css'

interface TFD_ScrollerRepsEachProps {
    value: number;
    setInViewElements: React.Dispatch<React.SetStateAction<number[]>>;
    centerElement: number;
}

const TFD_ScrollerRepsEach: React.FC<TFD_ScrollerRepsEachProps> = ({ value, setInViewElements, centerElement }) => {
    
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setInViewElements((prev) => [...prev, value]);
        } else {
            setInViewElements((prev) => prev.filter(item => item !== value));
        }
    }, [inView]);

    return (
        <div
            className={`home__body__center__ex__scroller__base__reps__control__container__each__${centerElement === value ? 'inCenter' : 'notCenter'} to__center`}
            ref={ref}
        >
            {value === 0 || value === 51 ? "" : value}
        </div>
    );
};

export default TFD_ScrollerRepsEach;