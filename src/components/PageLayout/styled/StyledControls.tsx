import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const controlsStyles = () => css`


    @media (min-width: ${breakpoints.desktop}) {
        margin: 0 0 40px 80px;
    }
`
export const StyledControls = styled('div')(controlsStyles);

