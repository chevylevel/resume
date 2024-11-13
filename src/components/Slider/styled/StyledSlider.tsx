import styled, { css } from 'styled-components';
import { breakpoints } from '../../../shared/constants/breakpoints';


const sliderStyles = () => css`
    max-width: 100vw;
    height: 100%;
    margin-right: -20px;

    @media (min-width: ${breakpoints.desktop}) {
        position: relative;
        display: flex;
        align-items: center;
        max-width: 100%;
        margin: 0 80px;
    }

    & .swiper-pagination {
        position: absolute;
        bottom: 10px;
        left: calc(50% - 10px);
        transform: translateX(-50%);
    }

    & .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background-color: #42567A;
    }

    & .swiper-pagination-bullet-active {
        background-color: #42567A;
        ;
    }

    & .slider__swiper {
        height: 100%;
    }

`
export const StyledSlider = styled('div')(sliderStyles);
