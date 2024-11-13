import { memo, useRef, useState } from 'react';
import gsap from 'gsap';

import StyledFromYear from './styled/StyledFromYear';
import StyledToYear from './styled/StyledToYear';
import StyledYears from './styled/StyledYears';
import { useGSAP } from '@gsap/react';

interface YearsProps {
    range: [number, number]
}

const Years = ({
    range
}: YearsProps) => {
    const [displayYears, setDisplayYears] = useState(range);
    const yearsRef = useRef({ fromYear: range[0], toYear: range[1] });

    useGSAP(() => {
        gsap.to(yearsRef.current, {
            fromYear: range[0],
            toYear: range[1],
            duration: 0.7,
            ease: 'power4.out',
            onUpdate: () => {
                setDisplayYears([
                    Math.floor(yearsRef.current.fromYear),
                    Math.floor(yearsRef.current.toYear),
                ]);
            },
        });
    }, [range])

    return (
        <StyledYears>
            <StyledFromYear> {displayYears[0]}</StyledFromYear>
            <StyledToYear>{displayYears[1]}</StyledToYear>
        </StyledYears>
    );
}

export default memo(Years);
