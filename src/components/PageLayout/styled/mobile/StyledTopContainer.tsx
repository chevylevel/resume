import styled, { css } from 'styled-components';

const topContainerStyles = () => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
`
export const StyledTopContainer = styled('div')(topContainerStyles);

