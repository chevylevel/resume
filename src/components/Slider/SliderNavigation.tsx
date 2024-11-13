import { forwardRef } from 'react';

import StyledNavButton, { NavButtonVariant } from '../StyledNavButton/StyledNavButton';
import StyledNavControl, { Direction } from './styled/StyledNavControl';
import IconLeft from '../../assets/icons/chevron-left.svg';
import IconRight from '../../assets/icons/chevron-right.svg';

interface SliderNavigationProps {
    direction: Direction
    onNavigate: () => void;
    disabled: boolean;
}

const SliderNavigation = forwardRef<HTMLButtonElement, SliderNavigationProps>(
    ({
        onNavigate,
        direction,
        disabled,
    }, ref) => (
        <StyledNavControl $direction={direction}>
            <StyledNavButton
                ref={ref}
                $size={40}
                $variant={NavButtonVariant.LIGHT}
                disabled={disabled}
                onClick={onNavigate}
            >
                {direction === Direction.PREV && <IconLeft />}
                {direction === Direction.NEXT && <IconRight />}
            </StyledNavButton>
        </StyledNavControl>
    )
);

export default SliderNavigation;
