import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

export enum Direction {
    PREV = 'prev',
    NEXT = 'next',
}

export interface StyledButtonProps {
    $direction: Direction;
}

const navControlStyles = ({ $direction }: StyledButtonProps) => css`
    display: none;

    @media (min-width: ${breakpoints.desktop}) {
        display: block;
        position: absolute;
        top: 50%;
        ${$direction === Direction.NEXT && css`right: -60px;`}
        ${$direction === Direction.PREV && css`left: -60px;`}
        transform: translateY(-50%);
        z-index:1;
    }
`
const StyledNavControl = styled('div')<StyledButtonProps>(navControlStyles);

export default StyledNavControl;
