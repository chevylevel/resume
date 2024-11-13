import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const controlsStyles = () => css`
    display: flex;

    & > :not(:last-child) {
        margin-right: 10px;

        @media (min-width: ${breakpoints.desktop}) {
            margin-right: 20px;
        }
    }
`
const StyledControls = styled('div')(controlsStyles);

export default StyledControls;
