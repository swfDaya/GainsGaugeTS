import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import './TFD_ScrollerWeightEach.css'

interface TFD_ScrollerWeightEachProps {
    value: number;
    setInViewElements: React.Dispatch<React.SetStateAction<number[]>>;
    centerElement: number;
}

const TFD_ScrollerWeightEach: React.FC<TFD_ScrollerWeightEachProps> = ({ value, setInViewElements, centerElement }) => {
    
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

    const NumberDisplay: React.FC<{ value: number }> = ({ value }) => {
        const hasDecimalPart = value % 1 !== 0;
        
        if (hasDecimalPart) {
          const [integerPart, decimalPart] = value.toString().split('.');
          return (
            <div className="number-display">
              <span className="digits">{integerPart}</span>
              <span className="decimal">.</span>
              <span className="digits">{decimalPart}</span>
            </div>
          );
        } else {
          return <div className="number-display">{value}</div>;
        }
    };

    return (
        <div
            className={`home__body__center__ex__scroller__base__reps__control__container__each__${centerElement === value ? 'inCenter' : 'notCenter'} to__center`}
            ref={ref}
        >
            {value === 0 || value === 50.25 ? "" : <NumberDisplay value={value} />}
        </div>
    );
};

export default TFD_ScrollerWeightEach;