import styled, { css } from 'styled-components';

const slideStyles = () => css`
    display: flex;
    flex-direction: column;
    min-width: 166px;
`
const StyledSlide = styled('div')(slideStyles);

export default StyledSlide;
