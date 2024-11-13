import { memo, useRef } from 'react';

import StyledPoint from './StyledPoint';
import { usePointTransitions } from './usePointTransitions';

interface PointProps {
    index: number,
    count: number,
    label: string,
    isCurrent: boolean,
    isRotating: boolean,
    isPrevCurrent: boolean,
    onSetCurrenPoint: (index: number) => void,
    onSetPointRef: (element: HTMLButtonElement | null, index: number) => void,
}

const Point = ({
    index,
    count,
    label,
    isCurrent,
    isPrevCurrent,
    isRotating,
    onSetCurrenPoint,
    onSetPointRef,
}: PointProps) => {
    const pointRef = useRef<HTMLButtonElement | null>(null);

    const {
        handleMouseEnter,
        handleMouseLeave,
    } = usePointTransitions({
        pointRef,
        isPrevCurrent,
        isCurrent,
        isRotating,
    });

    return (
        <StyledPoint
            ref={(el) => {
                pointRef.current = el;
                onSetPointRef(el, index);
            }}
            $index={index}
            $count={count}
            $isCurrent={isCurrent}
            disabled={isRotating}
            onClick={() => onSetCurrenPoint(index)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='index'>
                {index + 1}
            </div>

            <span className='label'>
                {label}
            </span>
        </StyledPoint>
    );
}

export default memo(Point);
