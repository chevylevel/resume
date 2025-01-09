import styled, { css } from 'styled-components';

const wheelStyles = () => css`
    --circle-diameter: 35%;
    position: absolute;
    width: var(--circle-diameter);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, .3);
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
export const StyledWheel = styled('div')(wheelStyles);
