import { FC } from 'react';
import StyledSlide from './styled/StyledSlide';
import StyledTitle from './styled/StyledTitle';
import StyledContent from './styled/StyledContent';

interface SlideProps {
    title: string,
    content: string,
}

const Slide: FC<SlideProps> = ({
    title,
    content,
}) => {
    return (
        <StyledSlide>
            <StyledTitle>
                {title}
            </StyledTitle>

            <StyledContent>
                {content}
            </StyledContent>
        </StyledSlide>
    );
}

export default Slide;
