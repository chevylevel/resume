import styled, { css } from 'styled-components';
import { breakpoints } from '../../shared/constants/breakpoints';

export enum NavButtonVariant {
    LIGHT = 'light',
    TRANSPARENT = 'transparent',
}

interface StyledNavButtonProps {
    $size?: number,
    $variant: NavButtonVariant,
    disabled?: boolean,
};

const lightVariantStyles = (isDisabled: boolean) => css`
    ${isDisabled && css`display: none;`}

    box-shadow: 0px 0px 15px 0px #3877EE1A;
    background: #FFFFFF;
    color: #3877EE;
`

const transparentVariantStyles = () => css`
    border: 1px solid rgba(66, 86, 122, 1);
`;

const navButtonStyles = ({
    $size = 50,
    $variant,
    disabled = false,
}: StyledNavButtonProps) => css`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: ${$size}px;
    height: ${$size}px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    ${$variant === NavButtonVariant.LIGHT &&
        lightVariantStyles(disabled)
    }

    ${$variant === NavButtonVariant.TRANSPARENT && css`
        ${transparentVariantStyles()}

        ${disabled && css`
            border-color: rgba(66, 86, 122, .5);
        `}
    `
    }
`
const StyledNavButton = styled('button')<StyledNavButtonProps>(navButtonStyles);

export default StyledNavButton;
