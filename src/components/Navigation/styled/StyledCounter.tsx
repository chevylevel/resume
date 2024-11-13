import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const counterStyles = () => css`
    margin-bottom: 10px;
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.12px;
    text-align: left;
    color: #42567A;

    @media (min-width: ${breakpoints.desktop}) {
        margin-bottom: 20px;
    }
`
const StyledCounter = styled('div')(counterStyles);

export default StyledCounter;
