import { memo, useCallback, useMemo, useState } from 'react';

import PageLayout from '../PageLayout/PageLayout';
import Wheel from '../Wheel/Wheel';
import Navigation from '../Navigation/Navigation';

import { categories } from '../../mock-data';
import Slider from '../Slider/Slider';
import Years from '../Years/Years';
import { useYearsRange } from '../Years/useYearsRange';

const PageContainer = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isPending, setIsPending] = useState(false);

    const headerNode = <span>Исторические<br />даты</span>

    const wheelNode = (
        <Wheel
            sections={categories}
            currentSection={currentSection}
            onSetCurrentSection={setCurrentSection}
            onRotating={setIsPending}
        />
    );

    const renderControlsNode = useCallback((isMobile: boolean) => (
        <Navigation
            total={categories.length}
            currentSection={currentSection}
            onSetCurrentSection={setCurrentSection}
            isDisabled={isPending}
            isMobile={isMobile}
        />
    ), [currentSection, setCurrentSection, isPending]);

    const sliderNode = <Slider events={categories[currentSection].events} />

    const yearsRange = useYearsRange(currentSection);

    const yearsNode = <Years range={yearsRange as [number, number]} />

    return (
        <PageLayout
            headerNode={headerNode}
            wheelNode={wheelNode}
            yearsNode={yearsNode}
            renderControlsNode={renderControlsNode}
            sliderNode={sliderNode}
        />
    );
}

export default memo(PageContainer);
