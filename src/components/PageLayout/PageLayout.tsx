import { ReactNode } from 'react';

import {
    StyledBottomContainer as StyledBottomContainerMobile
} from './styled/mobile/StyledBottomContainer';

import {
    StyledTopContainer as StyledTopContainerMobile
} from './styled/mobile/StyledTopContainer';

import { StyledControls } from './styled/StyledControls';
import { StyledHeader } from './styled/StyledHeader';
import { StyledPageLayout } from './styled/StyledPageLayout';
import { useMediaQuery } from '../../shared/hooks/useMediaQuery';
import { StyledPageLayoutMobile } from './styled/mobile/StyledPageLayoutMobile';
import { StyledBottomContaner } from './styled/StyledBottomContainer';

export interface PageLayoutProps {
    headerNode: ReactNode;
    wheelNode: ReactNode;
    renderControlsNode: (isMobile: boolean) => ReactNode;
    sliderNode: ReactNode;
    yearsNode: ReactNode;
}

const PageLayout = ({
    headerNode,
    wheelNode,
    renderControlsNode,
    sliderNode,
    yearsNode,
}: PageLayoutProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return isMobile
        ? (
            <StyledPageLayoutMobile>
                <StyledTopContainerMobile>
                    <StyledHeader>
                        {headerNode}
                    </StyledHeader>

                    {yearsNode}
                </StyledTopContainerMobile>

                <StyledBottomContainerMobile>
                    {sliderNode}

                    <StyledControls>
                        {renderControlsNode(isMobile)}
                    </StyledControls>
                </StyledBottomContainerMobile>
            </StyledPageLayoutMobile>
        )
        : (
            <StyledPageLayout>
                <StyledHeader>
                    {headerNode}
                </StyledHeader>

                {wheelNode}

                {yearsNode}

                <StyledBottomContaner>
                    <StyledControls>
                        {renderControlsNode(isMobile)}
                    </StyledControls>

                    {sliderNode}
                </StyledBottomContaner>
            </StyledPageLayout>
        );
}

export default PageLayout;
