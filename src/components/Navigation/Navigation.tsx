import { FC } from 'react';
import StyledNavigation from './styled/StyledNavigation';
import StyledCounter from './styled/StyledCounter';
import IconLeftSmall from '../../assets/icons/chevron-left-small.svg';
import IconLeft from '../../assets/icons/chevron-left.svg';
import IconRightSmall from '../../assets/icons/chevron-right-small.svg';
import IconRight from '../../assets/icons/chevron-right.svg';
import StyledNavButton, { NavButtonVariant } from '../StyledNavButton/StyledNavButton';
import StyledControls from './styled/StyledControls';

interface NavigationProps {
    total: number;
    currentSection: number;
    isDisabled: boolean;
    isMobile: boolean;
    onSetCurrentSection: (index: number) => void;
}

const Navigation: FC<NavigationProps> = ({
    total,
    isDisabled,
    isMobile,
    currentSection,
    onSetCurrentSection,
}) => {


    const handleChangeCurrent = (current: number) => {
        let count = current;

        if (count === total) {
            count = 0;
        }

        if (count < 0) {
            count = total - 1;
        }

        onSetCurrentSection(count);
    };

    return (
        <StyledNavigation>
            <StyledCounter>
                {0}{currentSection + 1}/{0}{total}
            </StyledCounter>

            <StyledControls>
                <StyledNavButton
                    $size={isMobile ? 25 : 50}
                    $variant={NavButtonVariant.TRANSPARENT}
                    disabled={isDisabled}
                    onClick={() => handleChangeCurrent(--currentSection)}
                >
                    {isMobile ? <IconLeftSmall /> : <IconLeft />}
                </StyledNavButton>

                <StyledNavButton
                    $size={isMobile ? 25 : 50}
                    $variant={NavButtonVariant.TRANSPARENT}
                    disabled={isDisabled}
                    onClick={() => handleChangeCurrent(++currentSection)}
                >
                    {isMobile ? <IconRightSmall /> : <IconRight />}
                </StyledNavButton>
            </StyledControls>
        </StyledNavigation>
    );
}

export default Navigation;
