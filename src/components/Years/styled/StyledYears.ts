import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';

const yearsStyles = () => css`
    display: flex;
    justify-content: center;
    font-family: PT Sans;
    font-size: 56px;
    margin-top: auto;
    margin-bottom: auto;

    & > :not(:last-child) {
        margin-right: 35px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        all: unset;
        display: flex;
        position: absolute;
        top: 40%;
        left: 49%;
        transform: translate(-50%, -50%);
        font-family: PT Sans;
        font-size: 200px;
        font-weight: 700;
        line-height: 160px;
        letter-spacing: -0.02em;
        text-align: center;

        & > :not(:last-child) {
            margin-right: 100px;
        }
    }

`
const StyledYears = styled('div')(yearsStyles);

export default StyledYears;
