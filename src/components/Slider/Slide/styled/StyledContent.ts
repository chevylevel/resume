import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../shared/constants/breakpoints';

const contentStyles = () => css`
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.3px;
    text-align: left;
    color: #42567A;
    max-height: 80px;

     @media (min-width: ${breakpoints.desktop}) {
        font-size: 20px;
        line-height: 30px;
    }
`
const StyledContent = styled('div')(contentStyles);

export default StyledContent;
