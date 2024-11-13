import styled, { css } from 'styled-components';

const pageLayoutMobileStyles = () => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 20px;

    &::before {
        content: '';
        position: absolute;
        background-color: rgba(66, 86, 122, .1);
        height: 1px;
        top: 50%;
        left: 20px;
        right: 20px;
        transform: translateY(-50%);
        z-index: -1;
    }
`;

export const StyledPageLayoutMobile = styled('div')(pageLayoutMobileStyles);
