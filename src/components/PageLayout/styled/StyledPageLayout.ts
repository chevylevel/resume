import styled, { css } from 'styled-components';

const pageLayoutStyles = () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: 10%;
    margin-right: 5%;
    padding: 80px 0;
    justify-content: space-between;
    border-left: 1px solid rgba(66, 86, 122, .1);
    border-right: 1px solid rgba(66, 86, 122, .1);

    &::before,
    &::after {
        content: '';
        position: absolute;
        background-color: rgba(66, 86, 122, .1);
        width: 1px;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }

    &::after {
        width: 100%;
        height: 1px;
        top: 40%;
        left: 0;
        transform: translateY(-50%);
    }
`;

export const StyledPageLayout = styled('div')(pageLayoutStyles);
