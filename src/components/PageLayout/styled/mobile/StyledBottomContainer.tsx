import styled, { css } from 'styled-components';

const bottomContainerStyles = () => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 10px;
`
export const StyledBottomContainer = styled('div')(bottomContainerStyles);
