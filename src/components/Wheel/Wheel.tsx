import { memo, useCallback, useRef } from 'react';
import { StyledWheel } from './StyledWheel';

import { useRotate } from './useRotate';
import Point from './Point/Point';

export type Point = {
    id: number,
    label: string,
}

interface WheelProps {
    sections: Point[];
    currentSection: number;
    onSetCurrentSection: (index: number) => void;
    onRotating: (inProcess: boolean) => void;
}

const Wheel = ({
    sections,
    currentSection,
    onRotating,
    onSetCurrentSection,
}: WheelProps) => {
    const circleRef = useRef<HTMLDivElement | null>(null);
    const sectionsRefs = useRef<HTMLButtonElement[]>([]);

    const {
        handleSetCurrenPoint,
        isRotating,
        currentPoint,
        prevCurrentPoint,
    } = useRotate({
        circleRef,
        sectionsRefs,
        currentSection,
        sections,
        onSetCurrentSection,
        onRotating,
    });

    const setRef = useCallback((element: HTMLButtonElement | null, index: number) => {
        if (element) {
            sectionsRefs.current[index] = element;
        }
    }, []);

    return (
        <StyledWheel ref={circleRef}>
            {sections.map(({ label, id }, index) => (
                <Point
                    key={id}
                    index={index}
                    count={sections.length}
                    label={label}
                    isCurrent={currentPoint === index}
                    isPrevCurrent={prevCurrentPoint === index}
                    isRotating={isRotating}
                    onSetCurrenPoint={handleSetCurrenPoint}
                    onSetPointRef={setRef}
                />
            ))}
        </StyledWheel>
    );
}

export default memo(Wheel);
