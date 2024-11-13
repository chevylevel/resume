import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Point } from './Wheel';
import { activeIndexStyles, activeLabelStyles, activePointStyles, defaultIndexStyles, defaultLabelStyles, defaultPointStyles } from './gsapStyles';

interface UseRotateParams {
    circleRef: MutableRefObject<HTMLDivElement | null>,
    sectionsRefs: MutableRefObject<HTMLButtonElement[]>,
    currentSection: number,
    sections: Point[],
    onSetCurrentSection: (index: number) => void,
    onRotating: (inTransition: boolean) => void,
}

export const useRotate = ({
    circleRef,
    sectionsRefs,
    currentSection,
    sections,
    onSetCurrentSection,
    onRotating,
}: UseRotateParams) => {
    const hasMount = useRef<any>(false);

    const [currentPoint, setCurrentPoint] = useState(currentSection);
    const [prevCurrentPoint, setPrevCurrentPoint] = useState(currentSection);
    const [isRotating, setIsRotating] = useState(false);
    const [cumulativeRotation, setCumulativeRotation] = useState(0);
    const [angle, setAngle] = useState(0);

    useGSAP(() => {
        if (!hasMount.current) {
            return;
        }

        const rotation = (cumulativeRotation + angle) % 360;

        setCumulativeRotation(rotation);
        setIsRotating(true);
        onRotating(true);

        const tl = gsap
            .timeline()
            .to(circleRef.current, {
                rotation: `+=${angle}`,
                duration: 0.7,
                ease: 'power2.inOut',
                onUpdate: () => {
                    const updatedRotation = gsap.getProperty(circleRef.current, 'rotation');
                    gsap.set(
                        [
                            sectionsRefs.current[currentPoint],
                            sectionsRefs.current[prevCurrentPoint],
                        ],
                        { rotation: -updatedRotation }
                    )
                },
                onStart: () => {
                    gsap.set(sectionsRefs.current[currentPoint].querySelector('.label'), { display: 'none' });
                    gsap.fromTo(sectionsRefs.current[prevCurrentPoint].querySelector('.label'),
                        activeLabelStyles,
                        defaultLabelStyles,
                    );

                    gsap.fromTo(sectionsRefs.current[prevCurrentPoint],
                        activePointStyles,
                        defaultPointStyles,
                    );
                    gsap.fromTo(sectionsRefs.current[prevCurrentPoint].querySelector('.index'),
                        activeIndexStyles,
                        defaultIndexStyles,
                    );

                    gsap.set(sectionsRefs.current[currentPoint],
                        activePointStyles
                    );
                    gsap.set(sectionsRefs.current[currentPoint].querySelector('.index'),
                        activeIndexStyles
                    );

                    // gsap.
                },
                onComplete: () => {
                    gsap.set(circleRef.current, { rotation });
                    sectionsRefs.current.forEach(section => gsap.set(section, { rotation: -rotation }));

                    setIsRotating(false);
                    onRotating(false);

                    gsap.to(sectionsRefs.current[currentPoint].querySelector('.label'),
                        activeLabelStyles
                    );
                },
            })
    },
        {
            scope: circleRef,
            dependencies: [
                angle,
                currentPoint,
                prevCurrentPoint,
            ]
        }
    );

    const getAngleToRotate = useCallback(
        (index: number, current: number) => {
            const anglePerPoint = 360 / sections.length;
            const initialAngle = index * anglePerPoint;
            const offset = current * anglePerPoint;
            const angleOfClickedPoint = initialAngle - offset;

            const angle = angleOfClickedPoint > 180 || angleOfClickedPoint < -180
                ? (360 - Math.abs(angleOfClickedPoint)) * angleOfClickedPoint / Math.abs(angleOfClickedPoint)
                : -angleOfClickedPoint;

            return angle;
        },
        [sections.length],
    );

    const handleSetCurrenPoint = useCallback(
        (index: number) => {
            const angleToRotate = getAngleToRotate(index, currentPoint);
            setAngle(angleToRotate);

            onSetCurrentSection(index);
            setCurrentPoint((prev) => {
                setPrevCurrentPoint(prev);

                return index;
            });
        },
        [
            onSetCurrentSection,
            setCurrentPoint,
            getAngleToRotate,
            currentPoint,
        ],
    );

    useEffect(
        () => {
            if (!hasMount.current) {
                hasMount.current = true;
            }

            if (currentSection !== currentPoint) {
                const angleToRotate = getAngleToRotate(currentSection, currentPoint);

                setAngle(angleToRotate)
                setCurrentPoint((prev) => {
                    setPrevCurrentPoint(prev);

                    return currentSection;
                });
            }
        },
        [
            currentSection,
            currentPoint,
        ],
    );

    return {
        isRotating,
        handleSetCurrenPoint,
        currentPoint,
        prevCurrentPoint,
    }
}
