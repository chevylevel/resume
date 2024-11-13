import styled, { css } from 'styled-components';

export const START_ANGLE = -60;

interface StyledPointProps {
    $index: number
    $count: number
    $isCurrent: boolean
}

const pointStyles = ({
    $index,
    $count,
    $isCurrent,
}: StyledPointProps) => {
    const angle = (($index / $count) * 360 + START_ANGLE) * (Math.PI / 180);
    const top = 50 + 50 * Math.sin(angle);
    const left = 50 + 50 * Math.cos(angle);

    return css`
        all: unset;
        display: flex;
        position: absolute;
        top: ${top}%;
        left: ${left}%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #42567A;
        cursor: pointer;

        & > .index {
            display: none;
            position: relative;
            font-family: PT Sans;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
            color: #42567A;
            pointer-events: none;
        }

        & > .label {
            display: none;
            position: absolute;
            left: 100%;
            margin-left: 15px;
            font-family: PT Sans;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            text-align: left;
            color: #42567A;
            pointer-events: none;
        }

        ${$isCurrent && css`
            align-items: center;
            justify-content: center;
            outline: 1px solid #303E5880;
            width: 56px;
            height: 56px;
            background-color: #F4F5F9;
            pointer-events: none;

            & > .index, .label {
                display: flex;
            }
        `}
    `
}

const StyledPoint = styled('button')<StyledPointProps>(pointStyles);

export default StyledPoint;

