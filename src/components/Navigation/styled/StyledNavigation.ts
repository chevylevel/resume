import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const controlsWrapperStyles = () => css`
    position: absolute;
    bottom: 10px;
    left: 20px;
    z-index: 1;

    @media (min-width: ${breakpoints.desktop}) {
        all: unset;
    }
`
const StyledControlsWrapper = styled('div')(controlsWrapperStyles);

export default StyledControlsWrapper;
