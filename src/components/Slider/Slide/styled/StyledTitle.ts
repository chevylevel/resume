import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../shared/constants/breakpoints';

const titleStyles = () => css`
    font-family: 'Bebas Neue';
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    text-align: left;
    color: #3877EE;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 25px;
        line-height: 30px;
    }
`
const StyledTitle = styled('div')(titleStyles);

export default StyledTitle;
