import { MutableRefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { defaultIndexStyles, defaultPointStyles, hoverIndexStyles, hoverPointStyles } from '../gsapStyles';

type UseHoverParams = {
    pointRef: MutableRefObject<HTMLButtonElement | null>,
    isCurrent: boolean,
    isPrevCurrent: boolean,
    isRotating: boolean,
}

export const usePointTransitions = ({
    pointRef,
    isCurrent,
}: UseHoverParams) => {
    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        if (!pointRef.current) return;

        gsap.fromTo(pointRef.current, defaultPointStyles, hoverPointStyles);
        gsap.fromTo(pointRef.current.querySelector('.index'), defaultIndexStyles, hoverIndexStyles);
    });

    const handleMouseLeave = contextSafe(() => {
        if (isCurrent || !pointRef.current) return;

        gsap.to(pointRef.current, defaultPointStyles);
        gsap.to(pointRef.current.querySelector('.index'), defaultIndexStyles);
    });

    return {
        handleMouseEnter,
        handleMouseLeave,
    }
}
