import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const headerStyles = () => css`
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 56px;
        line-height: 67.2px;
        padding-left: 80px;
        border-left: 5px solid;
        border-image-source: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
        border-image-slice: 1;
        max-height: fit-content;
        color: #42567A;
        margin-left: -1px;
        margin-top: 0;
    }
`
export const StyledHeader = styled('div')(headerStyles);
